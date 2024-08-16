
import Appdetails from '../../../../Component/Appdetails.js'

export default function id({app}){
 return(
   <div>
   <Appdetails   appdetails={app}/>
   </div>
   );
}


export async function getServerSideProps(context){
  const{params}=context
  
const response=await fetch(`https://app-download-webapp.vercel.app/api/data/catagory/app/${params.id}`)

const data=await response.json()


return{
  props:{
   app:data
  }
}

}