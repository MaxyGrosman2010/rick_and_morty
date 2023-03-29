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

export default function App() {

   const [access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const EMAIL = "max@gmail.com";
   const PASSWORD = "marcos1";

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
         <Nav logout={logout} />
         {/* <link rel="stylesheet" href="https://use.typekit.net/zoz7gnu.css"></link> */}
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards />}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}