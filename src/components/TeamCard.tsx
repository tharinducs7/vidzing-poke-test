import React from 'react';
import { padWithLeadingZeros, pokemonTypes, pokemonSVG } from '@/utils/helpers';

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

interface PokemonTeamCard {
    pokemon: Pokemon;
    handleRemoveFromTeam: (pokemon: Pokemon) => void;
}

const TeamCard = ({ pokemon, handleRemoveFromTeam }: PokemonTeamCard) => {
    const pokeType = pokemonTypes.find(type => type.id === pokemon.id);

    return (
        <div className="team__card">
            <div className="team__data">
                <img src={`${pokemonSVG}${pokemon.id}.svg`} alt={pokemon.name} className="team__img" />
                <div>
                    <h1 className="team__name">{pokemon.name}</h1>
                    <span className="team__id">#{padWithLeadingZeros(pokemon.id, 3)}</span>
                </div>
            </div>

            <div>
                <a href="#" className="team__actions"><i className='bx bxs-chevron-up-square'></i></a>
                <a href="#" className="team__actions"><i className='bx bxs-chevron-down-square' ></i></a>
                <a href="#" className="team__actions"><i className='bx bxs-message-square-x bx-rotate-270' style={{color:'#ff0000'}} onClick={() => handleRemoveFromTeam(pokemon)}></i></a>
            </div>
        </div>
    );
};

export default TeamCard;