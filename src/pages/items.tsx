import React from 'react';
import Styles from './items.module.css';
import {Link} from "react-router-dom";

const Items = () => {
    return (
        <div className={Styles['item-card']}>
            <Link to={"/pokemons/"}>

                <h1>Items</h1>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                     alt="pokeball"/>

            </Link>
        </div>
    );
};

export default Items;