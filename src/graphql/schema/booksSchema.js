import gql from "graphql-tag";

export default gql`
    type BOOKS{
        title: String
        author: String
    }
    extend type Query{
       getBooks:[BOOKS] 
    }
`