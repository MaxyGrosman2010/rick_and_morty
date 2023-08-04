import {useEffect} from 'react';
import {Routes, Route, useLocation, Link, useNavigate} from 'react-router-dom';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import SearchBar from './components/Nav/SearchBar/SearchBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';
import SignUp from './components/Form/signUp';
import {getUser} from './utils/localStorage';

export default function App() {
   const {pathname} = useLocation();
   const dictionary = {'/': true, '/signUp': true};
   const navigate = useNavigate();
   
   return (
      <div className={style.contains}>

         {dictionary[pathname] ? null : 
            <Link to='/home' >
               <img src='rickAndMorty.png' alt='logo' />
            </Link>}
         {dictionary[pathname] ? null : <div> <Nav /> <SearchBar /> </div>}
         {/* <link rel="stylesheet" href="https://use.typekit.net/zoz7gnu.css"></link> */}
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/home' element={<Cards />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
};