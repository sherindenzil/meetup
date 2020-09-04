// import React, { Component } from "react";
// import { getSuggestions } from "./api";

// class CitySearch extends Component {
//   state = {
//     query: " ",
//     suggestions: [],
//   };

//   handleInputChanged = (event) => {
//     const value = event.target.value;
//     this.setState({ query: value });
//     getSuggestions(value).then((suggestions) => this.setState({ suggestions }));
//   };

//   handleItemClicked = (value, lat, lon) => {
//     this.setState({ query: value, suggestions: [] });
//     this.props.updateEvents(lat, lon);
//   };

//   render() {
//     return (
//       <div className="CitySearch">
//         <input
//           type="text"
//           className="city"
//           value={this.state.query}
//           onChange={this.handleInputChanged}
//         />
//         <ul className="suggestions">
//           {this.state.suggestions.map((item) => (
//             <li
//               key={item.name_string}
//               onClick={() => this.handleItemClicked(item.name_string)}
//             >
//               {item.name_string}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default CitySearch;

// old code

// import React, { Component } from "react";
// import { getSuggestions } from "./api";
// import { InfoAlert } from "./Alert";

// class CitySearch extends Component {
//   state = {
//     query: "",
//     suggestions: [],
//   };

//   handleInputChanged = (event) => {
//     const value = event.target.value;
//     this.setState({ query: value });
//     getSuggestions(value).then((suggestions) => {
//       this.setState({ suggestions });

//       if (value && suggestions.length === 0) {
//         this.setState({
//           infoText:
//             "We can not find the city you are looking for. Please try another city",
//         });
//       } else {
//         this.setState({
//           infoText: "",
//         });
//       }
//     });
//   };

//   handleItemClicked = (value, lat, lon) => {
//     this.setState({ query: value, suggestions: [] });
//     this.props.updateEvents(lat, lon);
//   };

//   render() {
//     return (
//       <div className="CitySearch">
//         <InfoAlert text={this.state.infoText} />
//         <input
//           type="text"
//           className="city"
//           onChange={this.handleInputChanged}
//           value={this.state.query}
//         />
//         <ul className="suggestions">
//           {this.state.suggestions.map((item) => (
//             <li
//               key={item.name_string}
//               onClick={() =>
//                 this.handleItemClicked(item.name_string, item.lat, item.lon)
//               }
//             >
//               {item.name_string}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default CitySearch;

//new code

import React, { Component } from "react";
import { getSuggestions } from "./api";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      suggestions: [],
      infoText: "",
    };
    // this.updateEvents = this.updateEvents.bind(this);
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then((suggestions) => {
      this.setState({ suggestions });
      if (value && suggestions.length === 0) {
        this.setState({
          infoText:
            "We can not find the city you are looking for. Please try another city",
        });
      } else {
        this.setState({ infoText: "" });
      }
    });
  };

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  };

  // componentDidMount() {
  //   if (this.state.query === "") {
  //     // console.log("here");

  //     this.props.updateEvents(null, null, null);
  //   }
  // }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((item) => (
            <li
              key={item.name_string}
              onClick={() =>
                this.handleItemClicked(item.name_string, item.lat, item.lon)
              }
            >
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
