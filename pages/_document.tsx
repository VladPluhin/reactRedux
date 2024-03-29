import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
return (


<Html lang="en">

<Head>
  <meta charSet="utf-8" />
  <meta name="description" content="Test project" />
  <title>PictureApp</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
    </Head>

    <body>
      <div className="wrapper">
        <Main />
        <NextScript />
      </div>
    </body>

    </Html>
    )
}