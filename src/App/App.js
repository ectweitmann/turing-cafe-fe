import React, { Component } from 'react';
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

        </div>
        <ReservationsContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
