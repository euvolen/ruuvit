import gql from 'graphql-tag';

//  @public
// return User 
export const SIGN_IN = gql`
mutation ($email:String!,$password:String! ){
  signIn(email:$email, password:$password){
        token
    }
}
`
// @public
// return User
export const SIGN_UP = gql`
mutation ($email:String!,$firstname:String!, $lastname:String!,$password:String! ){
  signUp(email:$email, firstname:$firstname,lastname:$lastname, password:$password){
        token
    }
}
`


// @private
// return User
export const SIGN_OUT = gql`
mutation {
  signOut
}
`