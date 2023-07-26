import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';

export default function App() {
   return (
      <div className={style.contains}>

         {<img src='rickAndMorty.png' alt='logo'></img>}

         <Nav logout={logout} />
         {/* <link rel="stylesheet" href="https://use.typekit.net/zoz7gnu.css"></link> */}
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/home' element={<Cards />}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
};