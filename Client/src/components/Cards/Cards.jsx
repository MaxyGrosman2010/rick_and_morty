import {useDispatch, useSelector} from 'react-redux';
import Card from './Card/Card';
import style from './Cards.module.css';
import Paginate from './Paginate/Paginate';
import {useEffect, useState} from 'react';
import {getPageCharacter} from '../../redux/actions/actions';

export default function Cards() {
      const {numPage} = useSelector((state) => state);
      const [isLoading, setLoading] = useState(true);
      const dispatch = useDispatch();

      if(isLoading) <div>Loading...</div>;
      useEffect(() => {
            dispatch(getPageCharacter(numPage));
            setLoading(false);
      }, []);
      
      const {allCharacter} = useSelector((state) => state);
      console.log(allCharacter);
      return (
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
            </div>
      );
};