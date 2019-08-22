import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './apollo/typedefs'
import resolvers from './apollo/resolvers'
import schemaDirectives from './apollo/directives'
import {startProcess} from './deamons/rb-deamon'
import {connect} from './connect/db'
import session from './connect/session'

connect().then(()=>{

    const IN_PROD = process.env.IN_PROD || false  


    const APP_PORT = process.env.APP_PORT || 5000      
      
      
    const app = express()
    
    app.disable('x-powered-by')
      
      //Sessions
    app.use(session)
      
      //Apollo-server-express
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        schemaDirectives,
        playground: IN_PROD ? false: {
            settings:{
                "request.credentials":'include'
            }
        },
        context: ({req, res})=>({req,res})
    })
    
    
    //add express as a middleware   
    server.applyMiddleware({ app , cors:false})
    
    if(process.env.NODE_ENV === 'production'){
        //Set static folder
        app.use(express.static('client/build'))
    
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
        })
    }
    else{
        app.get('*', (req, res)=>{
            res.redirect('http://localhost:3000')
        })
    }
    
    app.listen({ port: APP_PORT }, async() => {
        //await startProcess()
        console.log(`Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
    })
    
    


}).catch(err=>console.log(err))
