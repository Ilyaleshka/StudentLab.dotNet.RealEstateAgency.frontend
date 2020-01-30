import React from "react";
import ReactPaginate from 'react-paginate';
import RentalAnnouncementItem from "./RentalAnnouncementListItem";
import './Styles/AnnouncementList.css';
import './Styles/Paginate.css';

class AnnouncementList extends React.Component {

  handlePageClick = (page) =>
  {

    let newpage = page.selected + 1;
    console.log(newpage);
    this.props.fetchRentalAnnouncements(newpage,this.props.pageSize,this.props.filters);
  }

  moreInfo = (id) =>
  {
    console.log("more");
    this.props.history.push("/adv/" + id);
    //this.props.moreInfo(this.props.model.Id)
  }

  render(){
    return ( 
    <div className="AnnouncementList">
        {this.props.rentAnnouncements.map((rentReq) =>  (<RentalAnnouncementItem key={rentReq.Id} model={rentReq} moreInfo={this.moreInfo}/>))}
        {(this.props.pageCount > 0 &&
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />)}
    </div>
    )
  };

  componentWillReceiveProps(nextProps)
  {   //console.log(nextProps.filters != this.props.filters)
      if(nextProps.filters != this.props.filters)
        this.props.fetchRentalAnnouncements(1,this.props.pageSize, nextProps.filters);
  }


  componentDidMount()
  {
      this.props.fetchRentalAnnouncements(1,this.props.pageSize,this.props.filters);
  }
}

export default  AnnouncementList;
