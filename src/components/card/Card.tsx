import React from 'react';
// import './card.scss';

const Card = ({ pokemon }: any) => {
    return (
        <div className="pokemon">
            <div className="picture">
                <img className="img-fluid" src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="team-content">
                <h4 className="title">{pokemon.name}</h4>
            </div>
            <ul className="add-to-team">
                <li><button className='text-button-color'> Add to Team </button></li>
            </ul>
        </div>
    );
};

export default Card;