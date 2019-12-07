import React from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import Collection from "../Collection";

class CollectionListBox extends React.Component {
  state = {
    collections: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase.orders().onSnapshot(snapshot => {
      let orders = [];
      snapshot.forEach(doc => orders.push({ ...doc.data(), uid: doc.id }));
      this.setState({
        collections: orders,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(order => (
          <Collection
            key={order.uid}
            orderId={order.uid}
            location={order.location}
          ></Collection>
        ))}
      </div>
    );
  }
}

const CollectionList = compose(withFirebase)(CollectionListBox);
export default CollectionList;
