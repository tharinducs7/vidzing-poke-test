/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { padWithLeadingZeros, pokemonTypes, pokemonSVG } from '@/utils/helpers';
import TeamCard from './TeamCard';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    order: number;
}

interface PokemonTeamPanel {
    handleRemoveFromTeam: (pokemon: Pokemon) => void;
    toggleSidebar: () => void;
    saveTeam: () => void;
    handleDragStart: (event: React.DragEvent<HTMLLIElement>, index: number) => void;
    handleDragOver: (event: React.DragEvent<HTMLLIElement>, index: number) => void;
    team: Pokemon[];
}

const TeamPanel = ({ handleRemoveFromTeam, handleDragStart, handleDragOver, team, toggleSidebar, saveTeam }: PokemonTeamPanel) => {
    return (
        <div className="sidebar">
            <div className="container">
                <img
                    alt="Official Pokemon Logo"
                    className="pokemon-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                />

                <div className="team">
                    <div className="team__container">
                        <div className="team__list" id="team-items">
                            {team.map((pokemon: any, key: number) => (
                                <TeamCard
                                    pokemon={pokemon}
                                    key={key}
                                    index={key}
                                    handleRemoveFromTeam={handleRemoveFromTeam}
                                    handleDragStart={handleDragStart}
                                    handleDragOver={handleDragOver}
                                />
                            ))}
                        </div>
                    </div>
                    {team.length > 1 && <button className="button-10" role="button" onClick={() => saveTeam()}>Save Team</button>}
                    {team.length === 0 && 
                        <>
                            <h2 className='no-team'>Build Your offshore pokemon team</h2>
                            <img src={`https://freepngimg.com/download/temp_png/109852-ketchum-ash-png-download-free.jpeg`} alt="no-team" />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPanel;