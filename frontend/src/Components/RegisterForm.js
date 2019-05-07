import React, { Component } from 'react';

class RegisterForm extends Component {

  state={
    username: "",
    password: "",
    bio: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted");
  }

  render() {
    return (
      <div>
        <h2>Register Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bio:
            <input
              type="text"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Register"/>
        </form>
      </div>
    );
  }

}

export default RegisterForm;
