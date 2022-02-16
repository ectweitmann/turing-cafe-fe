import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: ''
    }
  }

  render = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Number of Guests"
          name="numberOfGuests"
          value={this.state.numberOfGuests}
          onChange={this.handleChange}
        />
        <button onClick={''}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
