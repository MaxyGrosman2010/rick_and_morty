import {Link} from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {

   let originName = origin.name;


   return (
      <div>
         <button onClick={() => onClose(id)} >X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{originName}</h2>
         <img src={image} alt={name}/>
      </div>
   );
}