import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addFav, removeFav} from '../../../redux/actions/actions';
// import { onClose } from '../../../redux/actions/actions';
import style from './Card.module.css';

export default function Card({id, name, status, species, gender, origin, image}){

   const [isFavorite, setFavorite] = useState(false);
   const dispatch = useDispatch();
   const allFavorite = useSelector((state) => state.allFavorite);

   const handleFavorite = () => {

      if(isFavorite){
         setFavorite(false);
         dispatch(removeFav(id));

      }else{
         setFavorite(true);
         dispatch(addFav({id, name, status, species, gender, origin, image}));

      }
   };

   useEffect(() => {
      
      allFavorite.forEach((fav) => {
         if (fav.id === id) {
            setFavorite(true);
         }
      });

   }, [allFavorite]);

   return (

      <div key={id} className={style.contains} >

         {/* <button className={style.button} onClick={() => dispatch(onClose(id))} >X</button> */}

         {isFavorite ? 
         (<button className={style.button} onClick={handleFavorite}>❤️</button>) 
         : (<button className={style.button} onClick={handleFavorite}>🤍</button>)}

         <Link className={style.link} to={`/detail/${id}`}>
            <h2 className={style.name} >{name}</h2>
            <h2 className={style.text} >{status}</h2>
            <h2 className={style.text} >{species}</h2>
            <h2 className={style.text} >{gender}</h2>
            <h2 className={style.text}>{origin}</h2>
            <img className={style.image} src={image} alt={name}/>
         </Link>

      </div>

   );
};