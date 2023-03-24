import React from "react";

export default function SearchBar({onSearch}) {

   let [id, idSet] = React.useState("");

   const handleChange = (event) => idSet(event.target.value);
   
   return (   
      <div>
         <input type="search" onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}