import SearchBar from "../SearchBar/SearchBar";

export default function Nav({onSearch}){

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.random(287))}>Random</button>
        </div>
    );
}