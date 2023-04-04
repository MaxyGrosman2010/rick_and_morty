import React from "react";
import {useDispatch} from 'react-redux';
import { onSearch } from "../../redux/actions/actions";
import style from './SearchBar.module.css';

export default function SearchBar() {

   let [id, idSet] = React.useState("");
   const dispatch = useDispatch();

   const handleChange = (event) => idSet(event.target.value);
   
   return (   
      <div>
         <input className={style.searchBar} type="search" onChange={handleChange}/>
         <button className={style.searchBarButton} onClick={() => dispatch(onSearch(id))}>Agregar</button>

         <button className={style.random} onClick={() => dispatch(onSearch(Math.floor(Math.random() * 826)))} >Random</button>
      </div>
)};