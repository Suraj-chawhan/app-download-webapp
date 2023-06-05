import styles from '../styles/home.module.css'
import React from 'react'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
export default function Slidebar({getbanner}){
  
  const [count,setCount]=React.useState(0)
const[name,setName]=React.useState("Kinemaster")
useEffect(()=>{
  setInterval(()=>{
    setCount(val=>val>=2? 0:val+1)
    },3000)
},[])




function prev(){
  if(count<=2 && count>0){
   setCount(val=>val-1)
  }
  else{
    setCount(val=>2)
  }
}

function next(){
    
  
  if(count<=1){
   setCount(val=>val+1)
  
  }
  else{
    setCount(val=>0)
  }
  

}
  const router=useRouter()
  
  function call(){
   if(count===0){
    router.push("/app/4")
    
   }
   else if(count===1){
     router.push("/app/12")
    
   }
   else{
     router.push("/app/13")
    
   }
  }
  
  
  
 
  
  
  return(
       <div className={styles.mainbest}>
  <Image src={`/${getbanner[count].banner}`}  width={477} height={230} className={styles.bigimg}></Image>
   <button onClick={prev} className={styles.prev}>&#10094;</button>
   <button onClick={next} className={styles.next}>&#10095;</button>
   <div className={styles.slideapp}>
   <button onClick={call}>Download Now</button>
   </div>
    </div>
    
    );
  
}