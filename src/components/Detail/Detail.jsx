import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setLoading] = useState(true);
    const {name, status, species, gender, image, origin} = character;

    useEffect(() => {
        
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

           if (data.name) {
              setCharacter(data);
              setLoading(false);
           } else window.alert('No hay personajes con ese ID');

        });

        return setCharacter({});
     }, [id]);

     if(isLoading) return <div>Loading...</div>;

    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Origin: {origin.name}</h3>
            <img src={image} alt="" />
        </div>
    );
}