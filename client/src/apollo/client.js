import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';


const link = createHttpLink({
  uri:'/graphql'
})

const client = new ApolloClient({
  
  })

export default client  