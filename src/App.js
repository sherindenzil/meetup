import React, { Component } from "react";

import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import { getEvents } from "./api";
import "./App.css";

class App extends Component {
  componentDidMount() {
    getEvents().then((response) => this.setState({ events: response }));
  }

  state = {
    events: [],
    page: null,
    defaultCity: "",
    lat: null,
    lon: null,
  };

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((response) =>
        this.setState({ events: response, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((response) =>
        this.setState({ events: response, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((response) => this.setState({ events: response }));
    }
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
            lat={this.state.lat}
            lon={this.state.lon}
          />
        }
      </div>
    );
  }
}

export default App;
