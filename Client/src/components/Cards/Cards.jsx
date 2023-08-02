import {useDispatch, useSelector} from 'react-redux';
import Card from './Card/Card';
import style from './Cards.module.css';
import Paginate from './Paginate/Paginate';
import {useEffect} from 'react';
import {getPageCharacter, changeLoading} from '../../redux/actions/actions';

export default function Cards() {
      const {allCharacter, numPage, loading} = useSelector((state) => state);
      const dispatch = useDispatch();

      
      useEffect(() => {
            dispatch(getPageCharacter(numPage));
            dispatch(changeLoading());
      }, []);
      useEffect(() => {
            dispatch(changeLoading());
      }, [allCharacter]);
      
      if(loading) <div>Loading...</div>;

      return (
            <div>
                  {loading ? <div>Loading...</div> : 
                  <div>
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