import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {pageFav, resetPageFav} from '../../redux/actions/actions';
import Card from '../Cards/Card/Card';
import PaginateFav from '../Cards/Paginate/PaginateFav';
import style from './favorites.module.css';


export default function Favorites(){
    const {allFavorite, favPage} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetPageFav());
        dispatch(pageFav(favPage));

        return () => {
            dispatch(resetPageFav());
        }
    },[]);

    return(
        <div>
            <div className={style.contains} >
                {allFavorite && allFavorite.map((character) => <Card id={character.id} 
                    key={character.id} name={character.name} status={character.status} 
                    species={character.species} gender={character.gender} 
                    origin={character.origin} image={character.image}
                />)}
            </div>
            <PaginateFav />
        </div>
    );
};