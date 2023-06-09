import {useRouter} from 'next/router'
import Verticalapps from '../../../Component/Verticalapps.js'
export default function Tags({data,tags}){
  const router=useRouter()
  function handleClick(id){
  router.push(`/app/catagory/id/${id}`)
  }
  
  const gettags=data.map(val=><Verticalapps app={val} call={(id)=>handleClick(id)} key={val.id}/>)
  
  
 return(
   <div>
   
   <h1>List of {tags} apps</h1>
   {gettags}
   </div>
   );
}


export async function getServerSideProps(context){
  const {params}=context

const response=await fetch(`http://localhost:3000/api/data/catagory/${params.tags}`)
const data=await response.json()


return{
  props:{
    data,
    tags:params.tags
  }
}
}