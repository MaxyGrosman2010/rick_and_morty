import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailCharacter} from '../../redux/actions/actions';

export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    if(isLoading) <div>Loading...</div>;
    useEffect(() => {
        dispatch(getDetailCharacter(id));
        setLoading(!isLoading);
    }, [id]);

    const character = useSelector((state) => state.detailCharacter);

    return(
        <div>
            <h3>Name: {character.name}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin}</h3>
            <img src={character.image} alt="characterImage" />
        </div>
    );
}