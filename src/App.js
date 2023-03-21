import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
// import characters from './data.js';
import React from 'react';
import axios from "axios"

function App() {

   let [characters, setCharacters] = React.useState([]);   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   function onClose(id){
      setCharacters(characters.filter(character => character.id !== parseInt(id)));
   }

   return (
      <div className='App'>
         
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>

      </div>
   );
}

export default App;
