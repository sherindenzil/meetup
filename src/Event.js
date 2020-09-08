// import React, { Component } from "react";

// class Event extends Component {
//   state = {
//     showDetails: false,
//   };
//   handleShowDetails = () => {
//     if (this.state.showDetails === false) {
//       this.setState({ showDetails: true });
//     } else {
//       this.setState({ showDetails: false });
//     }
//   };

//   render() {
//     const showDetails = this.state.showDetails;

//     return (
//       <div className="event">
//         <div className="event__Overview">
//           <p className="event__Overview--name">{this.props.event.name}</p>
//           <p className="event__Overview--localDate">
//             {this.props.event.local_date}
//           </p>
//           <button onClick={() => this.handleShowDetails()}>show details</button>
//         </div>
//         {showDetails && (
//           <div className="event__Details">
//             <p className="event__Details--description">
//               {this.props.event.description}
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Event;

import React, { Component } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

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

  data = [
    { name: "Reservations", value: this.props.event.yes_rsvp_count },
    {
      name: "Free Slots",
      value: this.props.event.rsvp_limit - this.props.event.yes_rsvp_count,
    },
  ];

  // getData = () => {
  //   const data=[];
  //   data.push({name: 'Reservations', value: this.props.event.yes_rsvp_count}});
  // {name: 'Free Slots', value: {this.props.event.rsvp_limit - this.props.event.yes_rsvp_count}};};

  render() {
    return (
      <div className="Event">
        <div className="event__Overview">
          <p className="event__Overview--localTime">
            {this.props.event.local_time}
          </p>
          <p className="event__Overview--localDate">
            {this.props.event.local_date}
          </p>
          <p className="event__Overview--name">{this.props.event.name}</p>
          {this.props.event.group && this.props.event.group.name && (
            <p className="event__Overview--groupName">
              {this.props.event.group.name}
            </p>
          )}
          <p className="event__Overview--peopleGoing">
            People Going: {this.props.event.yes_rsvp_count}
          </p>
          {this.props.event.yes_rsvp_count && this.props.event.rsvp_limit && (
            <ResponsiveContainer height={200}>
              <PieChart>
                <Pie
                  isAnimationActive={false}
                  data={this.data}
                  dataKey="value"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}
          >
            Details
          </button>
        </div>
        {this.state.showDetails && (
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
