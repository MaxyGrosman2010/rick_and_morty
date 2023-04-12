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
import axios from 'axios';

export default function App() {

   const [access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const URL = 'http://localhost:3001/rickandmorty/login/';
   
   const login = async( userData ) => {
      try{
         const { email, password } = userData;
         let connect = await axios(URL + `?email=${email}&password=${password}`)
         const {access} = connect.data;

         if(access){
            setAccess(access);
            navigate('/home');
         };
      }catch(error){return error.message};
   };
   
   const logout = () => {
      let email = "logout@gmail.com";
      let password = 1234;
      
      axios(URL + `?email=${email}&password=${password}`).then(({data}) => {
         const {access} = data;
         if(!access){
            setAccess(access);
            !access && navigate('/');
      }}).catch(err => err.message);
      // setAccess(false);
      // navigate(`/`);
   };

   React.useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className={style.contains}>

         {<img src='rickAndMorty.png' alt='logo'></img>}

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
};