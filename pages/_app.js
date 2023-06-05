import styles from '../styles/home.module.css'
import Footer from '../Component/Footer.js'
import Navbar from '../Component/Navbar.js'

export default function App({ Component, pageProps }) {
  
  return(
  <div className={styles.body}>
 
<Navbar/>
  <Component {...pageProps}/>
  
 <Footer/>
  </div>
  )
}
