import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here is some of my work</h1>
      <div className='cards__container'>
        {/* <div className='cards__wrapper'> */}
          <ul className='cards__items'>
            <CardItem
              src='images/pikachu.png'
              text='The Pikachu Project'
              label='Pokemon'
              path='/'
            />
            <CardItem
              src='images/pikachu.png'
              text='The Pikachu Project'
              label='Pokemon'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pikachu.png'
              text='The Pikachu Project'
              label='Pokemon'
              path='/'
            />
            <CardItem
              src='images/pikachu.png'
              text='The Pikachu Project'
              label='Pokemon'
              path='/'
            />
          </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Cards;