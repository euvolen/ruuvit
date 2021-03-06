import mongoose from "mongoose"
import Joi from 'joi'
import {  signUp } from "../../validations"
import { User } from "../../models"
import { UserInputError } from "apollo-server-express";
import {signOut, attemtSignIn} from '../../auth'
import jwt from 'jsonwebtoken'
import {jwt_key} from './../../connect/credentials'

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

             await Joi.validate(args, signUp, {abortEarly:false})
             
             const user =  await User.create(args)
             req.session.userId = user.id
             req.session.role = user.role
  
             const payload = {id: user.id, role:user.role, name: `${user.firstname} ${user.lastname}`,avatar:user.avatar}

             const token = await jwt.sign(
                payload, 
                jwt_key, 
                { expiresIn: '3d'} );
             return {token:token}
            
        },
        signIn: async (root, {email, password}, {req}, info)=>{
  
            const user = await attemtSignIn(email,password)
            req.session.userId= user.id
            req.session.role = user.role
            const payload = {id: user.id, role:user.role,name: `${user.firstname} ${user.lastname}`, avatar:user.avatar}
            const token = await jwt.sign(
               payload, 
               jwt_key, 
               { expiresIn: '3d'} );
            return {token:token}  

        },
        signOut: (root, args, {req, res}, info)=>{
         
              return signOut(req,res)
        }
    }
}