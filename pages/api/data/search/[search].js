import data from '../../../../Component/Data.js'
export default function  search(req,res){
  
  const{search}=req.query
  const Data=[...data]
  const getdata=Data.filter((val)=>val.title.startsWith(search))
 res.status(200).json(getdata)
}