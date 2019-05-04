import React, { Component } from 'react';

import Snack from '../Components/Snack'
import BuySnack from '../Components/BuySnack'

class ProfileContainer extends Component {

  renderSnacks = () => {
    return this.props.user.snacks.map((snack) => {
      return <Snack key={snack.id} snack={snack}/>
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.user.username}{"'"}s Profile</h2>
        <h3>Bio: {this.props.user.bio}</h3>
        <p>Here are your snacks!</p>
        <ul>
          {this.renderSnacks()}
        </ul>
        <BuySnack/>
      </div>
    );
  }

}

export default ProfileContainer;
