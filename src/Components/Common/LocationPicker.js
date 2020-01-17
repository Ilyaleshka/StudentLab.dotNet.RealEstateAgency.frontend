import React from "react";
import {  YMaps, Map,Placemark} from "react-yandex-maps";
import "../Styles/LocationPicker.css"

export default class LocationPicker extends React.Component {

  state = {
    default: 
    {
      center: [53.90124551182249, 27.5510288551673],
      zoom: 10
    }
  };

  constructor(props) {
    super();

    if(props.value)
    {
      let location = JSON.parse(props.value);
      if(location.length == 2){
        let mapCenter = (location.length == 2) ? location : [53.90124551182249, 27.5510288551673];
        this.state = {
          default: 
          {
            center:  mapCenter,
            zoom: 8
          }
        };
      }
    }
  };

  onMapClick = (event) => {
    let coordinate = event.get("coords")
    console.log(coordinate);
    this.props.onChange(JSON.stringify(coordinate));
  };

  render() {
    let location = JSON.parse(this.props.value);
    let flag = (location.length == 2);

    return (
      <YMaps>
      <div className="LocationPicker">
        <Map onClick={this.onMapClick} defaultState={this.state.default}>
          {flag && <Placemark geometry={location}/>}
        </Map>
      </div>
    </YMaps>
    );
  };
}