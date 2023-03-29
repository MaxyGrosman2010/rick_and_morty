import Card from './Card/Card';
import {useSelector} from 'react-redux';

export default function Cards() {

      const characters = useSelector((state) => state.allCharacter);

      return (
            <div>
                  <ul>{
                        characters && characters.map(character => <li><Card
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin}
                        image={character.image}/></li>)
                  }</ul>
            </div>
      );
}