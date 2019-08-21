import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';


const link = createHttpLink({
  uri:'/graphql'
})

const client = new ApolloClient({
    link:"http://localhost:5000/graphql",
  })

export default client  