import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import style from './Nav.module.css'

export default function Nav({ logout }){

    let location = useLocation(); 

    if(location.pathname === `/`) return null;

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

            <button className={style.button} onClick={logout} >Log out</button>
            
            <SearchBar />
            
        </div>
    );
};