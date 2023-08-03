import {useDispatch, useSelector} from "react-redux";
import {pageFav} from "../../../redux/actions/actions";
import style from './Paginate.module.css';

export default function PaginateFav(){
    const {favPage, cantPage} = useSelector((state) => state)
    const dispatch = useDispatch();

    const next = () => {dispatch(pageFav(favPage + 1))};
    const prev = () => {dispatch(pageFav(favPage - 1))};
    const first = () => {dispatch(pageFav(1))};
    const last = () => {dispatch(pageFav(cantPage))};

    return(
        <div className={style.contains}>
            {cantPage === 0 ? <div>There are no favorites to load</div> : <div>
            {favPage !== 1 ? (<button className={style.button} onClick={first}>First
            </button>) : null}
            {favPage > 1 ? (<button className={style.button} onClick={prev}>{"<-"}</button>
                ) : null}
            <h3 className={style.button}>{favPage}</h3>
            {favPage < cantPage ? (<button className={style.button} onClick={next}>{"->"}
                </button>) : null}
            {favPage < cantPage ? (<button className={style.button} onClick={last}>Last
                </button>) : null }
            </div>}
        </div>
    );
};