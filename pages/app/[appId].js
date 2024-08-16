import {useRouter} from 'next/router'
import App from '../../Component/App.js'
import React from 'react'
import Appdetails from '../../Component/Appdetails.js'
import styles from '../../styles/home.module.css'

export default function Appid({apps,getid}){
  

  const router=useRouter()
  function handleClick(id){
  router.push(`/app/${id}`)
  }
  
  
const details=apps.find(val=>val.id===Number(getid))
 const recentdata=apps.filter(val=>val.tag==="recent")
 

    return(
    <div>
 
   <Appdetails  appdetails={details}/>
   <h3>Recent</h3>
 <div className={styles.main}>
{recentdata.map(val=><App app={val} call={(id)=>handleClick(id)} key={val.id}/>)}
 
 </div>
    </div>
    );
  
}






export async function getServerSideProps(context){
  const {params}=context

  const response=await fetch(`https://app-download-webapp.vercel.app/api/data/${params.appId}`)
  const data=await response.json()
  
  return{
    props:{
      getid:params.appId,
      apps:data
    }
  }
}
