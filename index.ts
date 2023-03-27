import fetch from "node-fetch";
import { readFileSync } from "fs";
import { CreateCaptureResponseType, TriggerCaptureResponseType } from "./types";
import { config } from "dotenv";

const apiEndpoint = "https://webapp.engineeringlumalabs.com/api/v2/capture";

async function main() {
  const configs = config().parsed;
  if (!configs) {
    console.log("configs not found");
    return;
  }

  const apikey = configs["API_KEY"];
  const title = configs["TITLE"];

  //==================== Capture =======================================
  const { source, slug } = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      Authorization: `luma-api-key=${apikey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title }),
  })
    .then((res) => res.json())
    .then((json: CreateCaptureResponseType) => {
      return {
        source: json.signedUrls.source,
        slug: json.capture.slug,
      };
    });

  console.log("capture is created");
  console.log(`slug: ${slug}`);

  //===================== Upload ======================================
  const videoData = readFileSync("./assets/video.mp4");
  await fetch(source, {
    method: "PUT",
    headers: {
      "Content-Type": "text/plain",
    },
    body: videoData,
  })
    .then((res) => res.status)
    .then(console.log);
  console.log("uploaded");

  //==================== Trigger =======================================
  const triggerResult = await fetch(`${apiEndpoint}/${slug}`, {
    method: "POST",
    headers: {
      Authorization: `luma-api-key=${apikey}`,
    },
  })
    .then((res) => res.json())
    .then((json: TriggerCaptureResponseType) => {
      return {
        title: json.title,
        status: json.status,
        slug: json.slug,
      };
    });

  console.log(triggerResult);
}

main();
