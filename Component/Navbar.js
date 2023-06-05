import Link from 'next/link'
import styles from '../styles/home.module.css'
import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function Navbar(){
  
 const[list,setList]=React.useState(styles.hunnyprev)
 const[val,setVal]=React.useState(false)
 
  function change(){
  
  
  if(val===false){
    
   setList(styles.hunny)
   setVal(val=>!val)
  }

  else{
    setList(styles.hunnyprev)
setVal(val=>!val)
  }
  }
  
  const router=useRouter()
  
  
  const[searchdata,setSearchData]=React.useState("")
  function call(e){
    console.log(e.key)
    const a=searchdata.toLowerCase()
   router.push(`/app/search/${a}`)
  }
  

  
  

  
  

 return(
   <nav className={styles.navcontainer}>
  <div className={styles.logosearch}>
   <Image src="/logo.png"  width={150} height={20}></Image>
    <input type="search" value={searchdata} onChange={(e)=>setSearchData(e.target.value)} className={styles.navchild}/>
<button onClick={(e)=>call(e)}
className={styles.search}>&#128269;</button>
</div>
   <div className={styles.divulbtn}>
      {val?<button onClick={change} className={styles.navbtn}>&#10005;</button>:<button onClick={change} className={styles.navbtn}>&#9776;</button>}
   <ul className={list}>
   <li>
   <Link href="/" className={styles.link}>Home</Link>
   </li>
   
   <li>
   <Link href="/about" className={styles.link}>About</Link>
   </li>
   <li>
   <Link href="/contact" className={styles.link}>Contact</Link>
   </li>
   <li>
   <Link href="/privacy" className={styles.link}>Privacy-Policy</Link>
   </li>
</ul>
 <ul className={styles.desktop}>
   <li>
   <Link href="/" className={styles.link}>Home</Link>
   </li>
   
   <li>
   <Link href="/about" className={styles.link}>About</Link>
   </li>
   <li>
   <Link href="/contact" className={styles.link}>Contact</Link>
   </li>
   <li>
   <Link href="/privacy" className={styles.link}>Privacy-Policy</Link>
   </li>
</ul>

   </div>
   
   </nav>
   );
}