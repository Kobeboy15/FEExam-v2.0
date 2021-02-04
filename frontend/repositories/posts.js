import gql from 'graphql-tag'

const FETCH_POSTS_QUERY = gql`
  query posts(
    $limit: Int,
    $offset: Int
  ){
    posts(pagination:{
      limit: $limit,
      offset: $offset
    }) {
      id title createdAt image
    }
  }
`

const FETCH_POST_QUERY = gql`
  query Post($postId: Int!){
    post(id: $postId) {
      id 
      title 
      content 
      image 
      createdAt 
      comments{
        id content createdAt
      }
    }
  }
`

const ADD_POST = gql`
  mutation addPost(
    $title:String!
    $content:String!
    $image:String!
  ){
    addPost(
      post: {
        title: $title,
        content: $content,
        image: $image	
    })
    {
      id
    }
  }
`

const UPDATE_POST = gql`
  mutation updatePost(
    $id: Int!
    $title:String!
    $content:String
    $image:String
  ){
    updatePost(
      post: {
        id: $id,
        title: $title,
        content: $content,
        image: $image	
    })
    {
      title
      content 
      image
      comments{
        id content createdAt
      }
    }
  }
`

const ADD_COMMENT = gql`
  mutation addComment(
    $postId: Int!
    $content: String!
  ){
    addComment(
      postId: $postId,
      content: $content
    )
    {
      id createdAt content
    }
  }
`

export { FETCH_POSTS_QUERY, FETCH_POST_QUERY, ADD_POST, UPDATE_POST, ADD_COMMENT };