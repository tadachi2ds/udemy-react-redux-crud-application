import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import logo from './logo.svg';
// import './App.css';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count:0}
  }

  handlePlusButton = () => {
    // console.log("handlePlusButton")
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    // console.log("handlePlusButton")
    this.setState({ count: this.state.count - 1})
  }

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}



export default App;
