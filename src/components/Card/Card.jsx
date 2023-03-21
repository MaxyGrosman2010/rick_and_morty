export default function Card({name, status, species, gender, origin, image, onClose}) {

   let originName = origin.name;

   return (
      <div>
         <button onClick={onClose} >X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{originName}</h2>
         <img src={image} alt={name}/>
         
      </div>
   );
}