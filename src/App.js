import React, { Component } from "react";

import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import { getEvents } from "./api";
import "./App.css";

class App extends Component {
  state = {
    events: [],

    // lon: null,
  };

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then((events) => this.setState({ events }));
  };

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        {
          <NumberOfEvents
            updateEvents={this.updateEvents}
            numberOfEvents={this.state.events.length}
          />
        }
      </div>
    );
  }
}

export default App;
