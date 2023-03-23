import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({onSearch, logout}){

    let location = useLocation();

    if(location.pathname === `/`) return null;

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.floor(Math.random() * 826))}>Random</button>

            <Link to='/home'>
                <button>Home</button>
            </Link>
            
            <Link to='/about'>
                <button>About</button>
            </Link>

            <button onClick={logout}>Log out</button>

            
        </div>
    );
}