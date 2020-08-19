import React, { Component } from "react";
import "./App.css";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents numberOfEvents={this.state.events.length} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
