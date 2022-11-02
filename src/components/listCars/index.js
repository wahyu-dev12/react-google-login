import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCar } from "../../actions/carAction";


function listCars() {
    const{ getListCarResult, getListCarLoading, getListCarError} = useSelector((state) => state.carReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        //get list cars
        dispatch(getListCar()); 
    }, [dispatch])
    return(
        <div>
            <h4>List Cars</h4>
            {getListCarResult ? (
                getListCarResult.map((cars) =>{
                    return(
                        <p key={cars.id}>{cars.name}</p>
                    )
                })
            ): getListCarLoading ? (
               <p>loading ...</p> 
            ) : (
               <p>{getListCarError ? getListCarError : 'data kosong'}</p>     
            )}
        </div>
    )
    
}
export default listCars;