import React from "react";
import RentalRequest from './RentalRequestListItem'
import ReactPaginate from 'react-paginate';
import './Styles/RequestList.css';
import './Styles/Paginate.css';

class RentalRequestList extends React.Component {

  handlePageClick = (page) =>
  {
    let newpage = page.selected + 1;
    console.log(newpage);
    this.props.fetchRentalRequests(newpage,this.props.pageSize,this.props.filters);
  }

  render(){
    return ( 
    <div className="RequestList">
        {this.props.rentRequests.map((rentReq) =>  (<RentalRequest key={rentReq.Id} model={rentReq}/>))}
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
  {   console.log(nextProps.filters != this.props.filters)
      if(nextProps.filters != this.props.filters)
        this.props.fetchRentalRequests(1,this.props.pageSize, nextProps.filters);
  }

  componentDidMount()
  {
      this.props.fetchRentalRequests(1,this.props.pageSize,this.props.filters);
  }
}

export default  RentalRequestList;
