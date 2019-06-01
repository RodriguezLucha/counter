import React, {Component} from 'react';
import './App.css';
import './Button.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

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
          { this.state.counter}
        </div>
        <div className='button-house'>
          <Fab size="large" color="secondary" aria-label="decrement" onClick={(e) => this.decrement(e)}>
            <Icon>remove_icon</Icon>
          </Fab>
          <Fab size="large" aria-label="Reset" onClick={(e) => this.resetCounter(e)}>
            <Icon>replay_icon</Icon>
          </Fab>
          <Fab size="large" color="primary" aria-label="increment" onClick={() => this.increment()}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
