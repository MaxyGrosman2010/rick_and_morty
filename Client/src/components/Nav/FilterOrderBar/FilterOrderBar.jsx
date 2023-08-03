import {useDispatch} from "react-redux";
import {orderCards, filterCards} from "../../../redux/actions/actions";
import style from './FilterOrderBar.module.css';

export default function FilterOrderBar(){
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    };
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return(
        <div>
                <select className={style.selectors} name="sortAOrD" onChange={handleOrder}>
                    <option disabled selected value="" >Orden by:</option>
                    <option value="A">Ascendant</option>
                    <option value="D">Descendant</option>
                </select>

                <select className={style.selectors} name="sortGender" onChange={handleFilter}>
                    <option disabled selected value="" >Filter by:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="All">All Characters</option>
                </select>
        </div>
    );
};