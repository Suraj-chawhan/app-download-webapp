import Verticalapps from '../../Component/Verticalapps.js'
import {useRouter} from 'next/router'
export default function apps({apps}){
  const router=useRouter()
  function handleClick(id){
    
  router.push(`/app/${id}`)
  }
  
  
  const map=apps.map(val=>{
    return(
      <div>
      <Verticalapps app={val} id={val.id} call={(id)=>handleClick(id)} key={val.id} />
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
     const response=await fetch("http://localhost:3000/api/data")
     const data=await response.json()
     
     return{
       props:{
         apps:data
       }
     }
   }