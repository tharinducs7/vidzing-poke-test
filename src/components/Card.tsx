import React from 'react';
import { padWithLeadingZeros, pokemonTypes, pokemonSVG } from '@/utils/helpers';
import PokeAPI from "pokeapi-typescript";
import { log } from 'console';
interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonCard {
  pokemon: Pokemon;
  addToTeam: (pokemon: Pokemon) => void;
}

interface PokeType {
    id: number,
    color: string,
    type: []
}

const Card = ({ pokemon, addToTeam }: PokemonCard) => {
    const pokeType = pokemonTypes.find(type => type.id === pokemon.id);
    
    return (
        <div className="pokemon">
            <div className="picture">
                <img className="img-fluid" src={`${pokemonSVG}${pokemon.id}.svg`} alt={pokemon.name} />
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