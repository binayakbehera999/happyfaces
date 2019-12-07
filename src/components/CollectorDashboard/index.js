import React from "react";
import { Link } from "react-router-dom";

class CollectorDashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/collectionList">Collection List</Link>
      </div>
    );
  }
}

export default CollectorDashboard;
