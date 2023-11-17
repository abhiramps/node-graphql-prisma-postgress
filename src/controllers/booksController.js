import { books } from "../../fakeDB/books.js";

export const getBooks=()=>{
    try{
       return books;
    }
    catch(error){
        console.log('getBooks Error',error)
        return new Error(error)
    }
}