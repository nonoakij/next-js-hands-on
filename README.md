# Next.js Hands-on

## このリポジトリについて

このリポジトリは、Next.js を使った開発を学ぶためのハンズオンです。
対象者は、Next.js において、公式の Learn を読んでいることを前提としています。(ドキュメントについては詳しく読了している必要はありません。)

## 構成

モノレポの構成になっています。
大きく4つパッケージで構成されています。

- `apps/solution` : 今回のハンズオンの完成した時の実装があります。このパッケージは、参考用です。
- `apps/workspace` : 今回のハンズオンで作業するパッケージです。主にこのパッケージを編集していきます。
- `docs` : 今回のハンズオンの進め方が書かれています。
- `backend` : Backend の実装です。今回のハンズオンでは、このパッケージを編集することはありません。


## セットアップ

### このリポジトリをクローンしてください。

https

``` bash
git clone https://github.com/nonoakij/next-js-hands-on.git
```

ssh

``` bash
git clone git@github.com:nonoakij/next-js-hands-on.git
```

gh

``` bash
gh repo clone nonoakij/next-js-hands-on
```

### プロジェクトディレクトリに移動してください

``` bash
cd next-js-hands-on
```

### 依存関係をインストールしてください

``` bash
pnpm install
```

> [!NOTE]
> このプロジェクトは `pnpm` を使用しています。
> `pnpm` をインストールしていない場合は、以下のコマンドでインストールしてください。
>
> brew
>
> ``` bash
> brew install pnpm
> ```
>
> npm
>
> ``` bash
> npm install -g pnpm
> ```
> 
> その他のインストール方法は、[pnpm 公式サイト](https://pnpm.io/ja/installation)を参照してください。

### 開発サーバーを起動してください

``` bash
pnpm run dev
```

### ブラウザで以下の URL にアクセスできることを確認してください

- 今回のHands-onで作業するサイトのURLです [http:localhost:3000](http:localhost:3000)
- 今回のHands-onの目標のサイトのURLです [http:localhost:4000](http:localhost:4000)
- Hands-onの進め方が書いています[http:localhost:5050](http:localhost:5050)
- Backend Server のURLです[http:localhost:8000](http:localhost:8000)

## これで準備は完了です

Hands-onを進めていきましょう！

進め方については、Github Pages でホスティングされているDocumentを参照してください。

[https://nonoakij.github.io/next-js-hands-on/](https://nonoakij.github.io/next-js-hands-on/)

## scripts　一覧

script | description
--- | ---
`pnpm run dev` | すべてを起動します
`pnpm run dev:workspace` | workspaceのみを起動します
`pnpm run dev:solution` | solutionのみを起動します
`pnpm run dev:docs` | docsのみを起動します
`pnpm run dev:backend` | backendのみを起動します
`pnpm run hands-on` | workspace と backend を起動します
`pnpm run build` | ビルドします
`pnpm run start` | ビルドしたアプリケーションを起動します
`pnpm run lint` | lint を実行します
`pnpm run format` | format を実行します
`pnpm run check` | lint と format を実行します
`pnpm run type-check` | 型チェックを実行します
