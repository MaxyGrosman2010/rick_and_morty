import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {nextPage, prevPage, handleNumber} from "../../redux/actions/actions";

export default function Paginate({cantPages}){

    const {numPage} = useSelector((state) => state)
    const dispatch = useDispatch();

    function next(){
        dispatch(nextPage());
    };
    function prev(){
        dispatch(prevPage());
    };
    function number(number){
        dispatch(handleNumber(number));
    };

    return(
        <div>

            { numPage > 1 ? (<div>
                <button onClick={prev}>{numPage - 1}</button>
            </div>) : null  }
            
            <h3>{numPage}</h3>
            
            { numPage < cantPages ? ( <div>
                <button onClick={next}>{numPage + 1}</button>
            </div> ) : null }
        </div>
    );
};