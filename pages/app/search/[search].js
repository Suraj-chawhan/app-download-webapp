import Verticalapps from '../../../Component/Verticalapps.js'
import {useRouter} from 'next/router'
export default function search({app}){
  
 const router=useRouter()
  function handleClick(id){
   router.push(`/app/${id}`)
  }
  
 return(
   <div>
  {
 
   app.length<1?<h1>Data not exist</h1>:app.map(val=><Verticalapps app={val} call={(id)=>handleClick(id)}/>)
   }
   </div>
   );
}


export async function getServerSideProps(context){
  const {params}=context
  
  const response=await fetch(`http://localhost:3000/api/data/search/${params.search}`)
  
const data=await response.json()
console.log(data)
return{
  props:{
   app:data,
  }
  
}
}