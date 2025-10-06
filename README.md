# Supabase Auth Starter

## 概要
このプロジェクトは、[Next.js]と[Supabase]を使用して構築された[Google認証機能のデモ]です。

## 🚀 技術スタック
* フレームワーク: Next.js
* 言語: TypeScript
* 認証サービス: Supabase Auth

## 🛠️ 開発環境のセットアップ

| 名称 | バージョン |
| ---- | ---- |
| node | 22.20.0 |
| pnpm | 10.18.0 |

### インストール手順
* リポジトリをクローンし、依存関係をインストールします。

```Bash

# 1. リポジトリをクローン
git clone git@github.com:y-nagase25/supabase-auth-starter.git
cd supabase-auth-starter

# 2. 依存関係をインストール
pnpm install
```

* 環境変数の設定  
プロジェクトルートに`.env.local`ファイルを作成し、必要な環境変数を設定します。


### 開発サーバーの起動

```bash
pnpm run dev
```
ブラウザで http://localhost:3000 にアクセスすると、アプリケーションが表示されます。

## フォルダ構成
プロジェクトの主要なディレクトリ構造を簡潔に示します。

```Bash
.
├── app/                   # App Router
├── components/            # UI Components
├── lib/supabase/          # Supabase clients
├── supabase/config        # Supabase config
├── .env.local
├── package.json
└── middleware.ts

```
