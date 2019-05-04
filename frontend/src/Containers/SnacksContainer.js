import React, { Component } from 'react';
import Snack from '../Components/Snack'

class SnacksContainer extends Component {

  render() {
    return (
      <div>
        <h2>Here are the snacks you can buy!</h2>
        <ul>
          {this.props.allSnacks.map((snack) => <Snack key={snack.id} snack={snack}/>)}
        </ul>
      </div>
    );
  }

}

export default SnacksContainer;
