import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Business from '../components/Business'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Portfolio />
      <Business />
      <Footer />
    </Layout>

  )
}
