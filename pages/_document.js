import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <title>Portafolio</title>
          <meta name="description" content="Portafolio personal de Marcelo Juan Surco Salas"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
          <link rel="shortcut icon" href="https://cdn-icons.flaticon.com/png/512/3242/premium/3242257.png?token=exp=1645579033~hmac=b1a75c00229b4a3adcd664860a25d8c9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
