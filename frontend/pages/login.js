import Head from 'next/head'
import Login from '../components/login'
import Layout from '../components/layout'

export default function LoginPage() {

  return (
    <div className="container">
      <Head>
        <title>Login - BLOG</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
        <Layout>
          <Login />
        </Layout>
    </div>
  )
}
