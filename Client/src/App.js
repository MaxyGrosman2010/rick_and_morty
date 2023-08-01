import React from 'react';
import {Routes, Route, useLocation, Link} from 'react-router-dom';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';
import SignUp from './components/Form/signUp';

export default function App() {
   const {pathname} = useLocation();
   const dictionary = {'/home': true, '/about': true, '/favorites': true, 
      '/detail/:id': true};

   return (
      <div className={style.contains}>

         {dictionary[pathname] ? <Link to='/home' ><img src='rickAndMorty.png' alt='logo' /></Link> : 
         <Link to="/" ><img src='rickAndMorty.png' alt='logo' /></Link>}
         {dictionary[pathname] && <div> <Nav /> </div>}
         {/* <link rel="stylesheet" href="https://use.typekit.net/zoz7gnu.css"></link> */}
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/home' element={<Cards />}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
};