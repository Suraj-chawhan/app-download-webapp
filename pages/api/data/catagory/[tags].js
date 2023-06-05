import data from '../../../../Component/Data.js'

export default function tags(req,res){
 const {tags}=req.query
 const getdata=data.filter(val=>val.tag===tags)
 res.status(200).json(getdata)
}