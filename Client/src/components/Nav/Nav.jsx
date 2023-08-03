import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteAll} from "../../utils/localStorage";
import {orderCards} from "../../redux/actions/actions";
import SearchBar from "./SearchBar/SearchBar";
import style from './Nav.module.css';


export default function Nav(){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    
    const handleLogout = () => {
        deleteAll();
        dispatch(orderCards(""));
        navigate('/');
    };
    return(
        <div className={style.contains} >
            <div >
                <Link to='/about'>
                    <button className={style.button} >About</button>
                </Link>
                <Link to='/favorites'>
                    <button className={style.button} >Favorites</button>
                </Link>
            </div>
            <button className={style.button} onClick={handleLogout} >Logout</button>
        </div>
    );
};