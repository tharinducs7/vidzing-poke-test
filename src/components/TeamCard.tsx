/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { padWithLeadingZeros, pokemonTypes, pokemonSVG } from '@/utils/helpers';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    order: number;
}

interface PokemonTeamCard {
    pokemon: Pokemon;
    index: number
    handleRemoveFromTeam: (pokemon: Pokemon) => void;
    handleDragStart: (event: React.DragEvent<HTMLLIElement>, index: number) => void;
    handleDragOver: (event: React.DragEvent<HTMLLIElement>, index: number) => void;
}

const TeamCard = ({ pokemon, handleRemoveFromTeam, handleDragStart, handleDragOver, index }: PokemonTeamCard) => {
    const pokeType = pokemonTypes.find(type => type.id === pokemon.id);

    return (
        <div className="team__card"
            draggable
            onDragStart={(event: any) => handleDragStart(event, index)}
            onDragOver={(event: any) => handleDragOver(event, index)}
        >
            <div className="team__data">
                <span className='order'>{padWithLeadingZeros(index+1, 2)}</span>
                <img src={`${pokemonSVG}${pokemon.id}.svg`} alt={pokemon.name} className="team__img" />
                <div>
                    <h1 className="team__name">{pokemon.name}</h1>
                    <span className="team__id">#{padWithLeadingZeros(pokemon.id, 3)}</span>
                </div>
            </div>
            <div>
                <a href="#" className="team__actions"><i className='bx bxs-message-square-x bx-rotate-270' style={{ color: '#ff0000' }} onClick={() => handleRemoveFromTeam(pokemon)}></i></a>
            </div>
        </div>
    );
};

export default TeamCard;