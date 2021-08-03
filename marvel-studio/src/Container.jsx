import MarvelCharacter from './marvel.json';
import './Container.scss';
import React from 'react';
import MarvelBg from './assets/imgs/marvel.jpg';
const HeroCard = React.lazy(() => import('hero/HeroCard'));

const Container = () => {
  const [showHeros, setShowHeros] = React.useState(false);

  return (
    <div
      className='container'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${MarvelBg})`,
      }}
    >
      {showHeros ? (
        <React.Suspense fallback={<span />}>
          {MarvelCharacter.map((character) => (
            <HeroCard
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              key={character.id}
              description={character.description}
            />
          ))}
        </React.Suspense>
      ) : (
        <div className='button' onClick={() => setShowHeros(true)}>
          Show Super Heros
        </div>
      )}
    </div>
  );
};

export default Container;
