import React from 'react';
import './Reservations.css';

const Reservations = ({ name, date, time, numberOfGuests }) => {
  return (
    <section className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {numberOfGuests}</p>
      <button>Cancel</button>
    </section>
  );
}

export default Reservations;
