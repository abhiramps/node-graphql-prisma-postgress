import booksResolver from "./booksResolver.js"
import restaurantResolver from "./restaurantResolver.js"

export default {
    Query:{
        ...booksResolver.Query,
        ...restaurantResolver.Query,
    }
}
