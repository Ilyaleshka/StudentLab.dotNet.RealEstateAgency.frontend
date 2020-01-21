import React from "react";
import Header from "../../Containers/HeaderContainer";
import SearchForm from "../../Containers/SearchFormContainer";

class AdvertismentsPage extends React.Component {

  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchForm/>
      </React.Fragment>
    );
  }
}

export default AdvertismentsPage;