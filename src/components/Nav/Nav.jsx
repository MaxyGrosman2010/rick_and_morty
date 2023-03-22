import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch}){

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.floor(Math.random() * 286))}>Random</button>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>

            
        </div>
    );
}