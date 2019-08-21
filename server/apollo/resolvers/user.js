import mongoose from "mongoose"
import Joi from 'joi'
import {  signUp } from "../../validations"
import { User } from "../../models"
import { UserInputError } from "apollo-server-express";
import {signOut, attemtSignIn} from '../../auth'
import jwt from 'jsonwebtoken'

/* 
 * Queries:
 * current, users, user, 
 * 
 * Methods:
 * signin, signup, signout
 * 
 */
export default {
    Query:{
        current: (root, args, {req}, info)=>{
            return User.findById(req.session.userId)
        },
        users:(root, args, {req}, info)=>{
             return User.find({doctor:req.session.userId })
        },
        user:(root, args, context, info)=>{

            if(!mongoose.Types.ObjectId.isValid(args.id)){
                    throw new UserInputError(`User ID is not a valid ObjectID`)
            }
            return User.findById(args.id)
        },
    },
    Mutation:{
        signUp: async(root, args, {req}, info)=>{
               console.debug(args) 
             await Joi.validate(args, signUp, {abortEarly:false})
             const user =  await User.create(args)
             req.session.userId = user.id
             req.session.role = user.role
             const payload = {id: user.id, role:user.role}
             const token = await jwt.sign(
                payload, 
                "This string is need to be transfered into separate setting file", 
                { expiresIn: '3d'} );
             return {token:token}
            
        },
        signIn: async (root, {email, password}, {req}, info)=>{
            console.debug(email, password) 
            const user = await attemtSignIn(email,password)
            req.session.userId= user.id
            req.session.role = user.role
            const payload = {id: user.id, role:user.role}
            const token = await jwt.sign(
               payload, 
               "This string is need to be transfered into separate setting file", 
               { expiresIn: '3d'} );
            return {token:token}  

        },
        signOut: (root, args, {req, res}, info)=>{
         
              return signOut(req,res)
        }
    }
}