import React, { Component } from "react";

//import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
//import { getEvents } from "./api";
import "./App.css";

class App extends Component {
  //  state = {
  //     events: [],
  //     lat: null,
  //     lon: null,
  //   };

  // updateEvents = (lat, lon) => {
  //   getEvents(lat, lon).then((events) => this.setState({ events }));
  // };

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList event={this.state.event} />
        {/* <NumberOfEvents numberOfEvents={this.state.events.length} /> */}
      </div>
    );
  }
}

export default App;
