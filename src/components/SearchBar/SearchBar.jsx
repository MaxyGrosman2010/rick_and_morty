import React from "react";

export default function SearchBar({onSearch}) {

   let [id, idSet] = React.useState("");

   const handleChange = (event) => idSet(event.target.value);
   let runOnSearch = () => onSearch(id);
   
   return (   
      <div>
         <input type="search" onChange={handleChange}/>
         <button onClick={runOnSearch}>Agregar</button>
      </div>
   );
}