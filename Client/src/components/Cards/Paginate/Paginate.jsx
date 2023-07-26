import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPageCharacter} from "../../../redux/actions/actions";
import style from './Paginate.module.css';

export default function Paginate(){
    const {numPage, cantPage} = useSelector((state) => state)
    const dispatch = useDispatch();

    function next(){dispatch(getPageCharacter(numPage + 1))};
    function prev(){dispatch(getPageCharacter(numPage - 1))};
    function first(){dispatch(getPageCharacter(1))};
    function last(){dispatch(getPageCharacter(cantPage))};

    return(
        <div className={style.contains}>
            {numPage != 1 ? (<button className={style.button} onClick={first}>First
            </button>) : null}
            {numPage > 1 ? (<button className={style.button} onClick={prev}>{"<-"}</button>
                ) : null}
            <h3 className={style.button}>{numPage}</h3>
            {numPage < cantPage ? (<button className={style.button} onClick={next}>{"->"}
                </button>) : null}
            {numPage < cantPage ? (<button className={style.button} onClick={last}>Last
                </button>) : null }
        </div>
    );
};