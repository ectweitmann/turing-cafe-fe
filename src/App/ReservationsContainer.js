import React from 'react';
import Reservations from './Reservations'
import './ReservationsContainer.css';

const ReservationsContainer = ({ reservations }) => {
  const reservationList = reservations.map(reservation => {
    console.log(reservation)
    return <Reservations
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      numberOfGuests={reservation.number}
    />
  })
  return (
    <div className='resy-container'>
      {reservationList}
    </div>
  )
}

export default ReservationsContainer;
