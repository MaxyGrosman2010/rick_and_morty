import SearchBar from "../SearchBar/SearchBar";

export default function Nav({onSearch}){

    return(
        <SearchBar onSearch={onSearch}/>
    );
}