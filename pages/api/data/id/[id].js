import data from '../../../Component/Data.js'
export default function id(req,res){
 const {id}=req.query
 const singleApp=data.find(val=>val.id===Number(id))
 res.status(200).json(singleApp)
}