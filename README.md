# LumaAI Video to 3D API Testbed

English | [日本語](./README_ja.md)

## About

Node.js (TypeScript) project designed to test requests to LumaAI's Video to 3D API.
This project sends your mp4 video file to the API and creates a NeRF.
Please note that it consumes credits.

## Environments

- Windows 10 Home
- Node.js 16.13.0

## Setup & Usage

Create a file named `.env` in the project root and set the API key and the title of the NeRF project to be created.
The following is an example of an `.env` file.

```dotenv
API_KEY=123456-1234-12345...
TITLE=api-test
```

Next, place an mp4 video file named `video.mp4` in the `assets` folder.
This video file will be uploaded to LumaAI.

Finally, run the following command to initiate a request to the API.

```sh
# install dependencies (only first time)
npm install

# run
npm run start
```

## Author & Contact

[にー兄さん@ninisan_drumath](https://twitter.com/ninisan_drumath)

