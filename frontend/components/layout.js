import Navbar from './navbar'
import News from './news'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <main className="container__main">
        <Navbar />
        {children}
        <News />
      </main>
      <Footer />
    </div>
  )
}