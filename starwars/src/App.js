import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      totalChars: 0,
      pages: 0,
      nextPage: null,
      prevPage: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data)
        this.setState({
          starwarsChars: data.results,
          totalChars: data.count,
          pages: Math.ceil(data.count / 10),
          nextPage: data.next,
          prevPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="character-container">
          <CharacterList charDirectory={this.state.starwarsChars}/>
        </div>
      </div>
    );
  }
}

export default App;
