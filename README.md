# LumaAI Video to 3D API Testbed

## About

LumaAI の Video to 3D API へのリクエストを試す目的で作られた Node.js(TypeScript)プロジェクト。
手元の mp4 動画ファイルを API へ送信し、NeRF を作成するまでを実行します。
なお、クレジットを消費するのでご注意ください。

## Environments

- Windows 10 Home
- Node.js 16.13.0

## Setup & Usage

プロジェクトルートに`.env`というファイルを作成し、API キーと作成する NeRF プロジェクトのタイトルを設定します。
以下は`.env`ファイルの例です。

```dotenv
API_KEY=123456-1234-12345...
TITLE=api-test
```

次に`assets`フォルダの中に`video.mp4`という名前で mp4 動画ファイルを配置します。
この動画ファイルが LumaAI にアップロードされます。

最後に以下のようにコマンドを実行すると、API へのリクエストが始まります。

```sh
# install dependencies (only first time)
npm install

# run
npm run start
```

## Author & Contact

[にー兄さん@ninisan_drumath](https://twitter.com/ninisan_drumath)

