import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          {/* Font preload */}
          <link
            rel="preload"
            href="/fonts/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Font display swap */}
          <style>
            {`
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 100 900;
                font-display: swap;
                src: url('/fonts/inter-var.woff2') format('woff2');
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument 