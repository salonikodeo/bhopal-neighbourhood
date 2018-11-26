import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



class Map extends Component {
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 23.259933, lng: 77.412615 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 23.259933, lng: 77.412615 }} />}
  </GoogleMap>
))
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDIH856EDhM6HZ9pI3A5NhPko9vjNOwBhw&v=3"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default Map;