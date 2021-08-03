import React from 'react';
import './HeroCard.scss';

const HeroCard = ({ img, name, description }) => (
  <article className='character'>
    <img src={img} alt={name} loading={'lazy'} />
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  </article>
);

export default HeroCard;
