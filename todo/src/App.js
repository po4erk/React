import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Knight">
          <div className="Attack">Attack: {this.props.attack}</div>
          <div className="Armor">Armor: {this.props.armor}</div>
        </div>
        <div className="Stats">

        </div>
        <div className="Inventory">

        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    attack: state.knight.attack,
    armor: state.knight.armor
  }
}
export default connect(mapStateToProps)(App);
