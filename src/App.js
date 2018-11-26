import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import SquareAPI from './API/'

class App extends Component {

  componentDidMount() {
    SquareAPI.search({
      near: "Bhopal, India",
      query: "food",
      limit: 10
    }).then(results => console.log(results));
  }
  render() {
    return (
      <div className="App">
        <Map/>
      </div>
    );
  }
}

export default App;
