/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { padWithLeadingZeros } from '@/utils/helpers';
// import './card.scss';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonCard {
  pokemon: Pokemon;
  addToTeam: (pokemon: Pokemon) => void;
}


const Card = ({ pokemon, addToTeam }: PokemonCard) => {
    return (
        <div className="pokemon">
            <div className="picture">
                <img className="img-fluid" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
            </div>
            <div className="team-content">
                <h3 className="name">#{padWithLeadingZeros(pokemon.id, 3)}</h3>
                <h4 className="title">{pokemon.name}</h4>
            </div>
            <ul className="add-to-team">
                <li><button className='text-button-color' onClick={() => addToTeam(pokemon)}> Add to Team </button></li>
            </ul>
        </div>
    );
};

export default Card;