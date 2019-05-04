import React, { Component } from 'react';
import Snack from '../Components/Snack'

class ProfileContainer extends Component {

  renderSnacks = () => {
    this.props.user.snacks.map((snack) => {
      return <Snack key={snack.id} snack={snack}/>
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.user.username}{"'"}s Profile</h2>
        <p>Here are your snacks!</p>
        <ul>
          {this.renderSnacks()}
        </ul>
      </div>
    );
  }

}

export default ProfileContainer;
