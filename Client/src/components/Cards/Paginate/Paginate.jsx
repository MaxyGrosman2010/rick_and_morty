import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {nextPage, prevPage} from "../../../redux/actions/actions";
import style from './Paginate.module.css';

export default function Paginate({cantPages}){

    const {numPage} = useSelector((state) => state)
    const dispatch = useDispatch();

    function next(){
        dispatch(nextPage());
    };
    function prev(){
        dispatch(prevPage());
    };

    return(
        <div className={style.contains}>

            { numPage > 1 ? (
                <button className={style.button}  onClick={prev}>{numPage - 1}</button>
            ) : null  }
            
            <h3 className={style.button}>{numPage}</h3>
            
            { numPage < cantPages ? ( 
                <button className={style.button}  onClick={next}>{numPage + 1}</button>
            ) : null }
        </div>
    );
};