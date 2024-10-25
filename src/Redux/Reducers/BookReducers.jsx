import { ADDBOOK } from "../ActionTypes";
let InitialValue={
    data:[]
}
export const BookReducers=(state=InitialValue,action)=>{
    // console.log(action.payload);
    // console.log(state.data);
    switch (action.type) {
        case ADDBOOK:
            return{
                ...state,data:[...state.data,action.payload]
            }
    
        default:
            return state;
    }
}