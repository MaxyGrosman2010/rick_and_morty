import React from 'react';
import axios from 'axios';
import {Routes, Route, useParams} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';


function App() {

   let [characters, setCharacters] = React.useState([]); 

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {

            if(characters.find(character => character.id === data.id))
               window.alert(`${data.id} ya existe`);
            else setCharacters((oldChars) => [...oldChars, data]);

         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   function onClose(id){
      setCharacters(characters.filter(character => parseInt(character.id) !== parseInt(id)));
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
