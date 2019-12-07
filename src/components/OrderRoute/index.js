/*global google*/
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class OrderRoute extends React.Component {
  render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCyAELVFOZoa2GYEhJ1Du6prSCiHMt2rNI&callback=initMap",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `600px`, width: `600px` }} />
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route(
            {
              origin: new google.maps.LatLng(12.980381, 77.644569),
              destination: new google.maps.LatLng(12.898794, 77.607472),
              travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: { ...result },
                  markers: true
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => (
      <GoogleMap defaultZoom={3}>
        {props.directions && (
          <DirectionsRenderer
            directions={props.directions}
            suppressMarkers={props.markers}
          />
        )}
      </GoogleMap>
    ));
    return <DirectionsComponent />;
  }
}

export default OrderRoute;
