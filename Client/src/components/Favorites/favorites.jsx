import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Card from '../Cards/Card/Card';
import style from './favorites.module.css'


export default function Favorites(){
    const {allFavorite} = useSelector((state) => state);

    useEffect(() => {},[]);

    return(
        <div>
            <div className={style.contains} >
                {allFavorite && allFavorite.map((character) => <Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin}
                            image={character.image}
                        />)}
            </div>
        </div>
    );
};