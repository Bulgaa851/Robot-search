import React, { Component } from "react";
import { CardList } from "./component/card-list";
import "./app.css";
import { SearchBox } from "./component/search";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobotsName = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );
    const filteredRobotsEmail = robots.filter((el) =>
      el.email.toLowerCase().includes(searchField)
    );
    const filteredRobotsPhone = robots.filter((el) =>
      el.phone.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Роботын хайлт</h1>
        <SearchBox onSearch={this.onSearchChanged} />

        <CardList robots={filteredRobotsName} />
        <CardList robots={filteredRobotsEmail} />
        <CardList robots={filteredRobotsPhone} />
        {/* <div>
    {this.state.robots.map(el => <div key = "el.id">{el.name}</div>)}
    </div> */}
      </div>
    );
  }
}
