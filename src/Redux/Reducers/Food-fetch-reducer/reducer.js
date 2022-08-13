import { GET_FOODS_DETAILS } from "../../Actions/Food-fetch-action/action.type"

const initialState={
    food_data:[],
    loading:true
}

export const foodReducers =(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_FOODS_DETAILS:
            return{
                ...state,
                food_data:payload,
                loading:false
            }
    
        default:
            return state
    }
}