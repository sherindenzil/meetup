// import React, { Component } from "react";

// class Event extends Component {
//   state = {
//     event: {},
//     showDetails: false,
//   };

//   handleShowDetails = () => {
//     this.setState({ showDetails: true });
//   };

//   render() {
//     const showDetails = this.state.showDetails;

//     return (
//       <div className="event">
//         <div className="event__Overview">
//           <p className="event__Overview--name">{this.state.event.name}</p>
//           <p className="event__Overview--localDate">
//             {this.state.event.local_date}
//           </p>
//           <button onClick={() => this.handleShowDetails()}>show details</button>
//         </div>
//         {showDetails && (
//           <div className="event__Details">
//             <p className="event__Details--description">
//               {this.state.event.description}
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Event;

import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">
            {this.props.event.local_date}
          </p>
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}
          >
            show details
          </button>
        </div>
        {showDetails && (
          <div className="event__Details">
            <p className="event__Details--description">
              {this.props.event.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
