import MarvelCharacter from './marvel.json';
import './Container.scss';
import React from 'react';

const CharacterCard = ({ img, name, description }) => (
  <article className='character'>
    <img src={img} alt={name} />
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  </article>
);

const Container = () => {
  return (
    <div className='container'>
      {MarvelCharacter.map((character) => (
        <CharacterCard
          img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          name={character.name}
          key={character.id}
          description={character.description}
        />
      ))}
    </div>
  );
};

export default Container;
