import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here is some of my work on Github</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/airbnb-1.jpg'
              text='Airbnb Website Emulation'
              label='JavaScript, NodeJS, Express, Handlebars, HTML, CSS, Postgresql'
              link='https://github.com/slam74/Airbnb-Website-Emulation/'
            />
            <CardItem
              src='./images/assembly-line.jpg'
              text='Assembly Line Simulation'
              label='C++'
              link='https://github.com/slam74/Assembly-Line-Simulation'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/retail-app.jpg'
              text='Retail Application'
              label='C++, PL/SQL'
              link='https://github.com/slam74/DBS311-Advanced-Data-Services'
            />
            <CardItem
              src='./images/hr-app.jpg'
              text='HR Application'
              label='C++, SQL'
              link='https://github.com/slam74/HR-Application'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/valet-parking.jpg'
              text='Valet Parking Application'
              label='C++'
              link='https://github.com/slam74/Valet-Parking-Application'
            />
            <CardItem
              src='./images/badminton-shop.jpg'
              text='Badminton Equipment Store Website'
              label='JavaScript, HTML5, CSS3'
              link='https://github.com/slam74/Badminton-Equipment-Store-Website'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/contact-management-app.jpg'
              text='Contact Management System Application'
              label='C'
              link='https://github.com/slam74/Contact-Management-System-Application'
            />
            <CardItem
              src='./images/api.jpg'
              text='Accessing Restaurant Data with an API'
              label='JavaScript, Lodash, Moment.js, Leaflet, jQuery, Bootstrap'
              link='https://github.com/slam74/Accessing-Restaurant-Data-with-an-API'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;