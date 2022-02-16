import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import ReservationsContainer from './ReservationsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  addReservation = (newReservation) => {
    this.setState({
      reservations: [
        ...this.state.reservations,
        newReservation
      ]
    });
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservationsData => {
        this.setState({ reservations: reservationsData });
      })
      .catch(errorResponse => this.setState({error: errorResponse}));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <ReservationsContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
