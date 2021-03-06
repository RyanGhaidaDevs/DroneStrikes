import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    
    
   render() {

   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lon)} }
        defaultZoom = { 8 }>
        <Marker position={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lon) }} />
      </GoogleMap>
   ));
   return(
      <div className="map">
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '900px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;