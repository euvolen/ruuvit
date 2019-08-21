import gql from 'graphql-tag';

// @private
// return User
export const CURRENT = gql`
query CurrentUserQuery{
  current{
        id
       role
    }
}
`
// @private @doctor
// return User
export const PATIENTS = gql`
query CurrentUserQuery{
  users{
        id
       role
    }
}
`
// @private @doctor
// return User
export const PATIENT_BY_ID = gql`
query CurrentUserQuery($user:ID!){
  user(user:$user){
        id
       role
    }
}
`