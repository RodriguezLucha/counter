import React, {Component} from 'react';
import './App.css';
import './Button.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment(){
    this.setState({counter: this.state.counter + 1});
  }
  decrement(e){
    e.stopPropagation();
    this.setState({counter: this.state.counter - 1});
  }

  resetCounter(e){
    e.stopPropagation();
    this.setState({counter: 0});
  }

  render(){
    return (
      <div className="App" onClick={() => this.increment()}>
        <div className="counter" >
          {this.state.counter}
        </div>
        <div className='button-house'>
          <button className="button" onClick={(e) => this.resetCounter(e)}>
            Reset
          </button>
          <button className="button" onClick={(e) => this.decrement(e)}>
            -
          </button>
        </div>
      </div>
    );
  }
}
