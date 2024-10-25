import axios from "axios";
import { ADDBOOK } from "../ActionTypes";

export const AddBook =(data)=> async(dispatch)=>{
    // console.log(data);
    let adddata= await axios.post("http://localhost:3000/bookdata",data)
    dispatch({
        type:ADDBOOK,
        payload:adddata.data
    })
}