import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 40.392577,
      lng: -3.698304
    },
    zoom: 15
  };
 
  render() {
    return (
      <div style={{ height: '200px', width: '241px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
 
export default Maps;