import session from  'express-session'
import connectMongo from 'connect-mongo'
import {credentials, sescredentials} from './credentials'

const {user, password, host, name, port} = credentials
const {sesname, sessecret,lifetime} = sescredentials

const MongoStore = connectMongo(session)

//Creates store in same db
const store = new MongoStore({
    url:`mongodb://${user}:${password}@${host}:${port}/${name}`
 })

 //Session configs
 const newSession = session({
    store,
    name: sesname,
    secret:sessecret,
    resave:true,
    rolling:true,
    saveUninitialized:false,
    cookie:{
        maxAge: parseInt(lifetime)
    }
 })

 export default newSession