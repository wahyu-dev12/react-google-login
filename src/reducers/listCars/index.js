import { Action } from "@remix-run/router"
import { GET_LIST_CAR } from "../../actions";

const initialState = {
    getListCarResult: false,
    getListCarLoading : false,
    getListCarError : false,


}

const listCars = (state = initialState, Action) =>{
    switch(Action.type){
        case GET_LIST_CAR:
        default:
            return {
                ...state,
                getListCarResult: Action.payload.data,
                getListCarLoading: Action.payload.loading,
                getListCarError: Action.payload.errorMessage,  


                 
            }
    }
}

export default listCars;