import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        userdata: Userdata! @private
        fulldata(user:ID!):Fulldata! @private @doctor

    }
    type Userdata {
        id: ID!
        primary_dataset: [String!]!
     

    }
    type Fulldata{
        id: ID!
        primary_dataset: [String!]!
        advanced_dataset:[String!]!
    }
   
  
`