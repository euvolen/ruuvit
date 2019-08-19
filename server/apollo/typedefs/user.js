import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        current: User @private
        user(id:ID!):User @private 
        users:[User!]! @private 

    }
    extend type Mutation{
        signUp(email:String!, name:String!, password:String!,affilation:String!):User @public
        signIn (email:String!, password:String!): User @public
        signOut: Boolean @private
    }
    type User {
        id: ID!
        email: String!
        role:String!
        name:String!
        createdAt: String!
        updatedAt:String!
    }
   
  
`