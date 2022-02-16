import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    console.log(newReservation)
    this.props.addReservation(newReservation);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: ''
    });
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
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className="submit-button" onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
