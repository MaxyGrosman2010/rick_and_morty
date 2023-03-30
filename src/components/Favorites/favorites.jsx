import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions/actions';
import Card from '../Cards/Card/Card';
import { useState } from 'react';
import style from './favorites.module.css'

function Favorites({onClose, myFavorite}){
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };
    const handleFilter = (event) => {dispatch(filterCards(event.target.value))};

    return(
        <div >

            <div className={style.options}>
                <select name="sortAOrD" onChange={handleOrder}>
                    <option value="order">Orden by:</option>
                    <option value="A">Ascendant</option>
                    <option value="D">Descendant</option>
                </select>

                <select name="sortGender" onChange={handleFilter}>
                    <option value="filter" disabled="disable">Filter by:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="All">All Characters</option>
                </select>
            </div>

            <div className={style.contains} >
                {myFavorite && myFavorite.map((character) => <Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin}
                            image={character.image}
                            onClose={onClose}/>)}
            </div>
        </div>
    );
}

function mapStateToProps(state){

    return {
       myFavorite: state.myFavorite
    }
 };

export default connect(mapStateToProps)(Favorites);