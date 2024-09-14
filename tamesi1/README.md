これは [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) でブートストラップされた [Next.js](https://nextjs.org/) プロジェクトです。

## はじめに

まず、開発用サーバーを起動します：

C:\Users\hiroh\Desktop\TR+2024-09-01\my-app\src\app\page.tsx で

<!-- bash -->

npm run dev

<!-- # または

yarn dev

# または

pnpm dev

# または

bun dev -->

```

http://localhost:3000](http://localhost:3000)を
ブラウザで開くと、結果が表示されます。

src\app/page.tsx`を修正することでページの編集を始めることができます。
ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは、[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)を使用して、カスタムGoogleフォントであるInterを自動的に最適化して読み込んでいます。

## 詳細はこちら

Next.jsの詳細については、以下のリソースをご覧ください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsのチュートリアルです。

[Next.jsのGitHubリポジトリ](https://github.com/vercel/next.js/) - フィードバックやコントリビューションを歓迎します！

## Vercelでデプロイする

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの制作者が提供する[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使うことです。

詳しくは[Next.js デプロイドキュメント](https://nextjs.org/docs/deployment)をご覧ください。

www.DeepL.com/Translator（無料版）で翻訳しました。
```

# ルール

HTML を書くとき

```
return タグは基本的なHTMLのタグを使えるが二つ以上使うとエラーがでる。

　<div> ->タグはreturnの中で使えば<p>タグなどを二個以上使える。
　<></> ->タグはreturnの中で使うと<p>タグなどを二個以上使えるが
　      生成されたHTMLの中に表示されない。
　<className> ->タグはHTMLの<class>とJSの<class>タグと被るから
　            HTMLで使うときは<className>タグを使う。
　{/*  */} ->コメントアウト
　// ->でタグの中にコメントできる
```

コンポーネント

```
const name = 'Contents' ->これでコンポーネントを作ることができる(リンクも可)
{name} ->これで使うことができる(HTMLの中でも)
const name = {Contents,Contents} ->これでまとめることもできる
{...link}  ->これで使うことができる。
　<span dangerouslySetInnerHTML={{ __html: name }}></span>
　　->'Contents'の中で<strong>などのタグを使う際に{name}の代わりに必要。
```

# HTML を JSX に変換するサイト

Transform Tools 　　https://transform.tools/html-to-jsx
