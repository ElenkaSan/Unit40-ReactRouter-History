import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
  return (
    <div className='DogList'>
      <h3>Our avaliable dogs:</h3>
        <h3 className='DogList-h'>
          {dogs.map((dog) => (
            <div>
              <img src={dog.src} />
                <h3>
                   <Link to={`/dogs/${dog.name.toLowerCase()}`}>Hey! I'm {dog.name}!</Link>
                </h3>
            </div>
          ))}
      </h3>
    </div>
  );
};

export default DogList;