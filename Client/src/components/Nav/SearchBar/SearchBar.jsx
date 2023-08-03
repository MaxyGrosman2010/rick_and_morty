import {useState} from "react";
import {useDispatch} from 'react-redux';
import {onSearch} from "../../../redux/actions/actions";
import style from './SearchBar.module.css';

export default function SearchBar() {
   let [name, setName] = useState("");
   const dispatch = useDispatch();

   const handleChange = (event) => setName(event.target.value);
   const handleReload = () => {
      setName(' ');
      dispatch(onSearch(name));
      setName('');
   };
   const handleSubmit = () => {
      dispatch(onSearch(name));
      setName('');
   };
   
   return (
      <div className={style.contains} >
         <div>
            <input className={style.searchBar} type="search" name="name" value={name} 
            onChange={handleChange} />
            <button className={style.searchBarButton} onClick={handleSubmit} >Agregar</button>
            <button className={style.random} onClick={handleReload} >Reset</button>
         </div>
      </div>
)};