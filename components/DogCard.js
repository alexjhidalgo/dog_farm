import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ dog }) => {
    const { name, breed, age, location, pictures } = dog;

    return (
        <div className="dog-card">
            <div className="dog-card-image">
                {pictures.map((picture, index) => (
                    <img src={picture} alt={`Dog ${index + 1}`} key={index} />
                ))}
            </div>
            <div className="dog-card-details">
                <h2>{name}</h2>
                <p>Breed: {breed}</p>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
                <Link to="/pages/Dog.js">See More</Link>
            </div>
        </div>
    );
};

export default DogCard;
