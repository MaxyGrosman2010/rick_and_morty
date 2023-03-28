import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';
import { removeFav } from './components/redux/actions/actions';

function App({removeFav}) {

   const [characters, setCharacters] = React.useState([]);
   const [access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const EMAIL = "max@gmail.com";
   const PASSWORD = "marcos1";

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.name) characters.find(character => character.id === data.id) ?
               window.alert(`${data.id} ya existe`) : setCharacters((oldChars) => [...oldChars, data]);
         else window.alert("¡No hay un ID!");

      });
   };

   const onClose = (id) => {
      setCharacters(characters.filter(character => parseInt(character.id) !== parseInt(id)));
      removeFav(id);
   };

   const login = ( userData ) => {

      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else window.alert("El usuario/contraseña es incorrecto");
   }

   const logout = () => {
      setAccess(false);
      navigate(`/`);
   };

   React.useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch} logout={logout} />
         {/* <link rel="stylesheet" href="https://use.typekit.net/zoz7gnu.css"></link> */}
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
      </div>
   );
}

export default connect(null, {removeFav})(App);