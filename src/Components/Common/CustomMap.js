import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
import "../Styles/CustomMap.css"
 
/* Default position */
const defaultPosition = {
    lat: 53.91744886103718,
    lng: 27.569982511718738
};
 
class CustomMap extends Component {
  constructor (props) {
    super(props);
 
    this.state = {
      address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal",
      position: {
        lat: 53.91744886103718,
        lng: 27.569982511718738
      }
    };
 
    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
 
  handleLocationChange ({ position, address, places }) {
    // Set new location
    this.setState({ position, address });
    console.log(position, address)
  }
 
  render () {
    return (
      <div className="CustomMap">
         
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}
  
  export default CustomMap;