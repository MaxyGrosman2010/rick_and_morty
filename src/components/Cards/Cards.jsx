import Card from '../Card/Card';



export default function Cards({characters}) {

      let onClose = () => window.alert('Emulamos que se cierra la card');
      
      return (
            <div>
                  <ul>{
                        characters && characters.map(character => <li><Card
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