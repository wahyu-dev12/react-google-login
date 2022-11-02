import axios from "axios";


export const GET_LIST_CAR = "GET _LIST_CAR";
export const getListCar =() =>{
    return ( dispatch ) => {

        // loading
        dispatch({
            type : GET_LIST_CAR,
            payload : {
                loading : true,
                data : false,
                errorMessage : false,
            }
        })

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/cars',
            timeout: 120000
        })
            .then((response) =>{
                // berhasil get api
                dispatch({
                    type : GET_LIST_CAR,
                    payload : {
                        loading : false,
                        data : response.data,
                        errorMessage : false,
                    }
                })
            })
            .catch((Error) =>{
                // gagal
                dispatch({
                    type : GET_LIST_CAR,
                    payload : {
                        loading : false,
                        data : false,
                        errorMessage : Error.errorMessage,
                    }
                })
            })

    }
} 