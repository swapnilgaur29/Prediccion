import Navbar from '@/components/navbar'
import Footer from "/components/footer"
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}
