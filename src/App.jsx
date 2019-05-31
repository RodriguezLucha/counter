import React, {Component} from 'react';
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      operation: 'Increment',
      counter: 0
    };
  }
  increment(){
    this.setState({counter: this.state.counter + 1});
  }
  decrement(){
    this.setState({counter: this.state.counter - 1});
  }

  toggleOperation(e){
    e.stopPropagation();
    this.state.operation === 'Increment' ? this.setState({operation:'Decrement'}) : this.setState({operation:'Increment'})
  }
  
  resetCounter(e){
    e.stopPropagation();
    this.setState({counter: 0});
  }

  render(){
    return (
      <div className="App" onClick={() => this.state.operation === 'Increment' ? this.increment() : this.decrement()}>
        <div className="counter" >
          {this.state.counter}
        </div>
        <div className='button-house'>
          <AwesomeButton cssModule={AwesomeButtonStyles} onClick={(e) => this.resetCounter(e)} >
            Reset
          </AwesomeButton>
          <AwesomeButton cssModule={AwesomeButtonStyles} onClick={(e) => this.toggleOperation(e)} >
            {this.state.operation}
          </AwesomeButton>
        </div>
      </div>
    );
  }
}
