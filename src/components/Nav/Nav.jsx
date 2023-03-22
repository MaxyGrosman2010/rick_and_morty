import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}){

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.random(287))}>Random</button>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
            
        </div>
    );
}