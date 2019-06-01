import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import NavButton from "./components/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      totalChars: 0,
      pages: 0,
      curPage: 1,
      nextPage: 1,
      prevPage: 1
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/", 1);
  }

  getCharacters = (URL, page) => {
    fetch(`${URL}?page=${page}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data)
        this.setState({
          starwarsChars: data.results,
          totalChars: data.count,
          pages: Math.ceil(data.count / 10),
          curPage: 1,
          nextPage:
            Math.ceil(data.count / 10) > 1
              ? Math.max(Math.min(page + 1, this.state.pages), 2)
              : 1,
          prevPage:
            Math.ceil(data.count / 10) > 1
              ? Math.max(Math.min(page - 1, this.state.pages - 1), 0)
              : 1
        });
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  changePage = page => {
    console.log(page);
    const next = Math.max(Math.min(page + 1, this.state.pages), 1);
    const prev = Math.max(Math.min(page - 1, next - 1), 1);
    this.getCharacters("https://swapi.co/api/people/", page);
    this.setState(prevState => ({
      prevPage: prev,
      curPage: page,
      nextPage: next
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>   

        <div className="character-container">
          <CharacterList charDirectory={this.state.starwarsChars} />
        </div>

        <NavButton
          action="prev"
          pageNum={this.state.prevPage}
          pageTotal={this.state.pages}
          pageChange={this.changePage}
        />
        <NavButton
          action="next"
          pageNum={this.state.nextPage}
          pageTotal={this.state.pages}
          pageChange={this.changePage}
        />
      </div>
    );
  }
}
