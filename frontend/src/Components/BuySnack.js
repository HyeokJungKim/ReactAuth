import React, { Component } from 'react';

class BuySnack extends Component {
  state={
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Log a New Snack"/>

      </form>
    );
  }

}

export default BuySnack;
