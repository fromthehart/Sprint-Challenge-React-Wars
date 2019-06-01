import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import NavButton from "./components/NavButton";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      totalChars: 0,
      pages: 0,
      curPage: "1",
      nextPage: null,
      prevPage: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/?page=1");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          totalChars: data.count,
          pages: Math.ceil(data.count / 10),
          curPage: URL.split('=')[1],
          nextPage: data.next,
          prevPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>   

        <div className="page-count-container">
          <div className="page-count">
            Page {this.state.curPage} of 9
          </div>
        </div>

        <div className="character-container">
          <CharacterList charDirectory={this.state.starwarsChars} />
        </div>

        <NavButton
          action="prev"
          pageLink={this.state.prevPage}
          pageTotal={this.state.pages}
          pageChangeHandler={this.getCharacters}
        />
        <NavButton
          action="next"
          pageLink={this.state.nextPage}
          pageTotal={this.state.pages}
          pageChangeHandler={this.getCharacters}
        />
      </div>
    );
  }
}
