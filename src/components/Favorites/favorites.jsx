import { connect} from 'react-redux';
import { onClose } from '../redux/actions';
import Card from '../Cards/Card/Card';

function Favorites({myFavorite, onClose}){
    return(
        <div>
            <ul>
                {myFavorite && myFavorite.map((character) => <li><Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin}
                            image={character.image}
                            onClose={onClose}/></li>)}
            </ul>
        </div>
    );
}

function mapStateToProps(state){
    return {
        myFavorite: state.myFavorite
    }
}

export default connect(mapStateToProps, {onClose})(Favorites);