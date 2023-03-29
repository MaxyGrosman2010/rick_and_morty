import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import SearchBar from "./SearchBar/SearchBar";
import { onSearch } from "../redux/actions/actions";

export default function Nav({ logout }){

    let location = useLocation();
    const dispatch = useDispatch();    

    if(location.pathname === `/`) return null;

    return(
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            
            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/favorites'>
                <button>Favorites</button>
            </Link>

            <button onClick={logout}>Log out</button>
            
            <SearchBar />
            <button onClick={() => dispatch(onSearch(Math.floor(Math.random() * 826)))}>Random</button>
            
        </div>
    );
}