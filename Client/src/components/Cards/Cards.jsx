import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPageCharacter, changeLoading} from '../../redux/actions/actions';
import Card from './Card/Card';
import Paginate from './Paginate/Paginate';
import FilterOrderBar from '../Nav/FilterOrderBar/FilterOrderBar';
import style from './Cards.module.css';


export default function Cards() {
      const {allCharacter, numPage, loading} = useSelector((state) => state);
      const dispatch = useDispatch();

      
      useEffect(() => {
            dispatch(getPageCharacter(numPage));
      }, []);
      useEffect(() => {dispatch(changeLoading())}, [allCharacter]);

      return (
            <div>
                  {loading  ? <div>Loading...</div> : 
                  <div>
                        <FilterOrderBar />
                        <div className={style.contains} >
                        {allCharacter && allCharacter.map(character => <Card 
                              id={character.id} key={character.id} name={character.name}
                              status={character.status} species={character.species} 
                              gender={character.gender} origin={character.origin} 
                              image={character.image} />)}
                        </div>
                        <div>
                              <Paginate />
                        </div>
                  </div>}
            </div>
      );
};