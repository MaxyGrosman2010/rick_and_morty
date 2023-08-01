import {Link, useLocation, useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import style from './Nav.module.css';
import {deleteAll} from "../../utils/localStorage";

export default function Nav(){
    let location = useLocation();
    let navigate = useNavigate();
    
    const handleLogout = () => {
        deleteAll();
        navigate('/');
    };

    return(
        <div className={style.contains} >

            <Link to='/home'>
                <button className={style.button} >Home</button>
            </Link>
            
            <Link to='/about'>
                <button className={style.button} >About</button>
            </Link>

            <Link to='/favorites'>
                <button className={style.button} >Favorites</button>
            </Link>

            <button className={style.button} onClick={handleLogout} >Log out</button>
            
            <SearchBar />
            
        </div>
    );
};