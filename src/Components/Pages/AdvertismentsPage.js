import React from "react";
import Header from "../Header";

class AdvertismentsPage extends React.Component {

  constructor() {
    super();
  }


  render(){
    return(
       <Header isLoggedIn="false" />
    );
  }
}

export default AdvertismentsPage;