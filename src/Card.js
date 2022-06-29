import React from 'react';


import { HiLocationMarker } from 'react-icons/hi';

export default function Card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.places;
  return (
    <div className="card--container">
      <div className="image">
        <img src={`${imageUrl}`} alt="image" />
      </div>
      <div className="info">
        <div className="loc--info">
          <HiLocationMarker className="loc--icon" />
          <span className="loc--country">{location}</span>
          <small className="loc--map">
            <a href={`${googleMapsUrl}`}>View on Google Maps</a>
          </small>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <h5 className="date">
          <span>{startDate}</span> - <span>{endDate}</span>
        </h5>
        <p className="text">{description}</p>
      </div>
    </div>
  );
}
