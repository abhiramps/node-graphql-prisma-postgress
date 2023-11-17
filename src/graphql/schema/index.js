import gql from "graphql-tag";
import booksSchema from "./booksSchema.js";
import restaurantSchema from "./restaurantSchema.js";
import {JSONDefinition} from 'graphql-scalars'

export default gql`
    type Query{
        _empty:String!
    }
    type Mutation{
        _empty:String!
    }
    ${JSONDefinition}
    ${booksSchema}
    ${restaurantSchema}

`