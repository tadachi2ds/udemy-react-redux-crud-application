import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hahako", age: 5},
    { name: "Saburo"}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
  )
}

const User = (props) => {
  return <div>Hi , I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}

// class App extends Component {
//   render() {
//     const dom = <h1>Hi!</h1>
//     return dom;
//   }
// }

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. OK!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
