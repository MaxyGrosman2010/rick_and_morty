import Card from './Card/Card';



export default function Cards({characters, onClose}) {

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
                        image={character.image}
                        onClose={onClose}/></li>)
                  }</ul>
            </div>
      );
}