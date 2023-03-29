import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {addFav, removeFav} from '../../redux/actions/actions';
import { useState } from 'react';
import { useEffect } from 'react';
import { onClose } from '../../redux/actions/actions';

function Card({id, name, status, species, gender, origin, image, addFav, removeFav, myFavorite}){

   const [isFavorite, setFavorite] = useState(false);
   const dispatch = useDispatch();

   const handleFavorite = () => {

      if(isFavorite){
         setFavorite(false);
         removeFav(id);

      }else{
         setFavorite(true);
         addFav({id, name, status, species, gender, origin, image});

      }
   };

   useEffect(() => {
      
      myFavorite.forEach((fav) => {
         if (fav.id === id) {
            setFavorite(true);
         }
      });
   }, [myFavorite]);

   return (

      <div key={id}>

         <button onClick={() => dispatch(onClose(id))} >X</button>

         {isFavorite ? 
         (<button onClick={handleFavorite}>❤️</button>) 
         : (<button onClick={handleFavorite}>🤍</button>)}

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt={name}/>

      </div>

   );
}

function mapStateToProps(state){

   return {
      myFavorite: state.myFavorite
   }
};

export default connect(mapStateToProps, {addFav, removeFav})(Card);