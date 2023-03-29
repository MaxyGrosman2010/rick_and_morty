import React from "react";
import {useDispatch} from 'react-redux';
import { onSearch } from "../../redux/actions/actions";

export default function SearchBar() {

   let [id, idSet] = React.useState("");
   const dispatch = useDispatch();

   const handleChange = (event) => idSet(event.target.value);
   
   return (   
      <div>
         <input type="search" onChange={handleChange}/>
         <button onClick={() => dispatch(onSearch(id))}>Agregar</button>
      </div>
   );
}