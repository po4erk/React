import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeName, changeDescription} from './actions/action';

class App extends Component {
  render() {
    const {name, description, changeName, changeDescription} = this.props;
    return (
      <div className="App">
        <input type='text'
               value={name} 
               placeholder="New Form" 
               onChange={(event)=>{changeName(event.target.value)}}/>
        <input type='text' 
               value={description} 
               placeholder="Description" 
               onChange={(event)=>{changeDescription(event.target.value)}}/>
        <div>{`${name} ${description}`}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    name: state.question.name,
    description: state.question.description
  }
}
function mapDispatchToProprs(dispatch){
  return{
    changeName: bindActionCreators(changeName, dispatch),
    changeDescription: bindActionCreators(changeDescription, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProprs)(App);
