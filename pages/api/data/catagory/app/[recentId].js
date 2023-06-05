import data from '../../../../../Component/Data.js'
export default function recent(req,res){
  const {recentId}=req.query
  const find=data.find(val=>val.id===Number(recentId))
  res.status(200).json(find)
}