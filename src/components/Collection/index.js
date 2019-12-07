import React from "react";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.enroute = this.enroute.bind(this);
    this.showLocation = this.showLocation.bind(this);
  }

  enroute = destination => {
    navigator.geolocation.getCurrentPosition(position => {
      this.showLocation(position);
    });
  };

  showLocation = position => {
    console.log(position);
  };

  render() {
    return (
      <div>
        <div>{this.props.orderId}</div>
        <button onClick={() => this.enroute(this.props.location)}>
          Directions
        </button>
      </div>
    );
  }
}

export default Collection;
