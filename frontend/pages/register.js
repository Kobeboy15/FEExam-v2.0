import Head from 'next/head'
import Register from '../components/register'
import Layout from '../components/layout'

export default function RegisterPage() {

  return (
    <div className="container">
      <Head>
        <title>Register - BLOG</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
        <Layout>
          <Register />
        </Layout>
    </div>
  )
}
