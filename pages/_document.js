import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "../package.json";

class _Document extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            charSet="UTF-8"
            name="viewport"
            content="width=device-width, initial-scale=1 user-scalable=no"
          />
          <meta name="description" content={config.description} />
          <meta name="keywords" content={config.keywords} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={config.configuration.url} />
          <meta property="og:title" content={config.configuration.title} />
          <meta property="og:description" content={config.description} />
          <meta
            property="og:image"
            content={config.configuration.url + "images/og.png"}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={config.configuration.url} />
          <meta property="twitter:title" content={config.configuration.title} />
          <meta property="twitter:description" content={config.description} />
          <meta
            property="twitter:image"
            content={config.configuration.url + "images/og.png"}
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#70b6f1" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content={config.configuration.color} />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="language" content={config.configuration.language} />
          <meta name="author" content={config.author} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
