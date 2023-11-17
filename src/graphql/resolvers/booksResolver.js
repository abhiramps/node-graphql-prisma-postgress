
import { getBooks } from "../../controllers/booksController.js";

export default {
    Query:{
        getBooks:()=>{
            return getBooks()
        }
    }
}