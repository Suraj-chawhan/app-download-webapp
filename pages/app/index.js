import Verticalapps from '../../Component/Verticalapps.js'
import {useRouter} from 'next/router'
export default function Apps({apps}){
  const router=useRouter()
  
  function handleClick(id){
  router.push(`/app/${id}`)
  }
  
  
  const map=apps.map(val=>{
    return(
      <div key={val.id}>
      <Verticalapps app={val} id={val.id} call={(id)=>handleClick(id)}  />
      <hr/>
      </div>
      );
  })
  
  
  
 return(
   <div>
   {map}
   
   </div>
   );
   }
   
   
   export async function getServerSideProps(){
     const response=await fetch("https://app-download-webapp.vercel.app/api/data")
     const data=await response.json()
     
     return{
       props:{
         apps:data
       }
     }
   }