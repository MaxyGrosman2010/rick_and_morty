import React, { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Error from './components/Error/Error';
import Form from './components/Form/Form';

function App() {

   let [characters, setCharacters] = React.useState([]);
   const [access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const EMAIL = "max@gmail.com";
   const PASSWORD = "marcos1";

   const onSearch = (id) => {
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

   const onClose = (id) => {
      setCharacters(characters.filter(character => parseInt(character.id) !== parseInt(id)));
   };

   const login = ( userData ) => {

      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else window.alert("El usuario/contraseña es incorrecto");
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;