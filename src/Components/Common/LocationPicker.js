import React from "react";
import {  YMaps, Map,Placemark} from "react-yandex-maps";
import "../Styles/LocationPicker.css"

export default class LocationPicker extends React.Component {
  constructor(props) {
    super();

    let location = JSON.parse(props.value);

    let mapCenter = (location.length == 2) ? location : [53.90124551182249, 27.5510288551673]
    this.state = {
      default: 
      {
        center:  mapCenter,
        zoom: 10
      }
    };
  }

  onMapClick = (event) => {
    let coordinate = event.get("coords")
    console.log(coordinate);
    this.props.onChange(JSON.stringify(coordinate))
    /*this.setState(
      {
        coord: coordinate 
      }
    );*/
  }


  render() {
    let flag = (this.props.value.length == 2);
    return (
      <YMaps>
      <div className="LocationPicker">
        <Map onClick={this.onMapClick} defaultState={this.state.default}>
          {flag && <Placemark geometry={this.props.value}/>}
        </Map>
      </div>
    </YMaps>
    );
  }
}