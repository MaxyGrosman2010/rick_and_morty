import {useSelector} from 'react-redux';
import Card from './Card/Card';
import style from './Cards.module.css'

export default function Cards() {

      const characters = useSelector((state) => state.allCharacter);

      return (
            <div className={style.contains} >
                  {
                        characters && characters.map(character => <Card
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
      );
}