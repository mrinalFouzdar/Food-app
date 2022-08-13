
import axios from "axios";
import { GET_FOODS_DETAILS } from "./action.type";

const getFoodsData=(data)=>({
    type:GET_FOODS_DETAILS,
    payload:data
})

export const fetchFoodsApi=()=>async(dispatch)=>{
    try {
        
       let data=await axios.get(`${process.env.REACT_APP_API}`)
       console.log(data);
       dispatch(getFoodsData(data.data))
    } catch (error) {
        console.log(error);
    }
}