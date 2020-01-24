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

  render(){
    return ( 
    <div className="AnnouncementList">
        {this.props.rentAnnouncements.map((rentReq) =>  (<RentalAnnouncementItem key={rentReq.Id} model={rentReq}/>))}
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
        />
    </div>
    )
  };

  componentDidMount()
  {
      this.props.fetchRentalAnnouncements(1,this.props.pageSize,this.props.filters);
  }
}

export default  AnnouncementList;
