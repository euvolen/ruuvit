import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        current: User @private
        user(id:ID!):User @private @doctor
        users:[User!]! @private @doctor

    }
    extend type Mutation{
        signUp(email:String!, firstname:String!,lastname:String!, password:String!, status:String, company:String):Auth @public
        signIn (email:String!, password:String!): Auth @public
        signOut: Boolean @private
    }
    type User {
        id: ID!
        email: String!
        role:String!
        firstname:String!
        lastname:String!
        status:String
    }
    type Auth {
        token:String!
    }

   
  
`