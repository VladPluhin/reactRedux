import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html  lang="en-US">
        <Head>
           <meta charSet="utf-8"/>
           <meta name="description" content="Test project"/>
           <title>PictureApp</title>
        </Head >
        <body>
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
    </Html>
  )
}