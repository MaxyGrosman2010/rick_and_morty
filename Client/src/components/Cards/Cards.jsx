import {useDispatch, useSelector} from 'react-redux';
import Card from './Card/Card';
import style from './Cards.module.css';
import Paginate from './Paginate/Paginate';
import {useEffect, useState} from 'react';
import {getAllCharacter} from '../redux/actions/actions';

export default function Cards() {

      const [isLoading, setLoading] = useState(true);
      const dispatch = useDispatch();

      if(isLoading) <div>Loading...</div>;

      useEffect(() => {
            dispatch(getAllCharacter());
            setLoading(false);

      }, []);

      const {allCharacter, numPage} = useSelector((state) => state);
      let cantPages = Math.floor(allCharacter.length / 6);
      let from = (numPage - 1) * 6;
      let to = numPage * 6;
      let viewCharacters = allCharacter.slice(from, to);

      return (
            <div>
                  <div className={style.contains} >
                        {
                              viewCharacters && viewCharacters.map(character => <Card
                              id={character.id}
                              key={character.id}
                              name={character.name}
                              status={character.status}
                              species={character.species}
                              gender={character.gender}
                              origin={character.origin}
                              image={character.image}/>)
                        }
                  </div>

                  <div>
                        <Paginate cantPages={cantPages} />
                  </div>
            </div>
      );
};