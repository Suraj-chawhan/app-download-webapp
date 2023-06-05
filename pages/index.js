
import Link from 'next/link'
import App from '../Component/App.js'
import Slidebar from '../Component/Slidebar.js'
import styles from "../styles/home.module.css"
import {useRouter} from 'next/router'
import Verticalapps from '../Component/Verticalapps.js'


export default function Home({apps}){

const router=useRouter()
function handleClick(id){
 router.push(`/app/${id}`)
}



const recent=apps.filter(val=>val.tag==='recent')
const a=recent.map(val=><App app={val} id={val.id} call={(id)=>handleClick(id)} key={val.id}/>)


const top=apps.filter(val=>val.tag==='top')
const b=top.map(val=><App app={val} id={val.id} call={(id)=>handleClick(id)}  key={val.id}/>)


const getbanner=apps.filter(val=>val.tag==='best')
const app=apps.slice(0,10)

  
  return(
    <div>
    <div className={styles.container}>
  
    <Slidebar getbanner={getbanner}/>
     <div>
    <h3>Recent Post</h3>
    <div className={styles.main}>
  {a}
  </div>
  <h3>Top post</h3>
    <div className={styles.main}>
     
  {b}
    </div>
      <h3>Apps</h3>
    {app.map(val=>{
    return(
    <div>
    <Verticalapps app={val} id={val.id} call={(id)=>handleClick(id)}    key={val.id}  />
    <hr/>
  
    </div>
    )
    }
      )
    }
    </div>
        </div>
     <button onClick={()=>{router.push("/app")}} className={styles.nextbtn}>Next Page{' >>'}</button>
     

    </div>
  );
}
export async function getServerSideProps(){
  const response=await fetch('http://localhost:3000/api/data')
    const data=await response.json()
  return{
    props:{
     apps:data,
    }
  }
  
  
}