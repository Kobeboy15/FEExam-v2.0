import Head from 'next/head'
import SlideShow from '../components/slideshow'
import Layout from '../components/layout'

export default function Index() {

  return (
    <div className="container">
      <Head>
        <title>LIG FrontEnd Exam</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
        <Layout>
          <SlideShow />
        </Layout>
    </div>
  )
}
