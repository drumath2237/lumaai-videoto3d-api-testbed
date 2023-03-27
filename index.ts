import fetch from "node-fetch";

async function main() {
  const response = await fetch("https://zenn.dev/");
  console.info(response.status);
}

main();
