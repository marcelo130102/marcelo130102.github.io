import Head from 'next/head'
import '../global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marcelo Surco · Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
