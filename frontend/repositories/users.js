import gql from 'graphql-tag'

const REGISTER_USER = gql`
  mutation Register(
    $email: String!
    $password: String!
  ) {
    register(
      email: $email
      password: $password
    ) 
  }
`

const AUTHENTICATE_USER = gql`
mutation Authenticate(
  $email: String!
  $password: String!
) {
  authenticate(
    email: $email
    password: $password
  ) 
}
`

export { REGISTER_USER, AUTHENTICATE_USER };