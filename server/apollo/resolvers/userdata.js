
import { Userdata } from "../../models"


/* 
 * Queries:
 * userdata, fulldata
 * 
 * 
 */
export default {
    Query:{
        userdata: (root, args, {req}, info)=>{
            return Userdata.findById(req.session.userId)
        },
        fulldata:(root, args, context, info)=>{
             return Userdata.findOne({user:args.user})
        }
    }
}