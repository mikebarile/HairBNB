import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class BookListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = this.props.currentListing;

    return (
      <div className="sl-book-listing">
        <div className="slb-row">

          <div className="slb-col slb-col-first">
            <span className="slb-col-title">Check In</span>
            <input className="slb-col-date" placeholder="mm/dd/yyyy" type="text"/>
          </div>

          <div className="slb-col">
            <span className="slb-col-title">Check Out</span>
            <input className="slb-col-date" placeholder="mm/dd/yyyy" type="text"/>
          </div>

          <div className="slb-col slb-col-last">
            <span className="slb-col-title">Guests</span>
            <select className="slb-col-guests">
              <option defaultValue>1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
          </div>
        </div>

        <span className="slb-book">Book</span>

        <span className="slb-disclaimer">Your credit card won't be charged ever</span>
      </div>
    );
  }
}

export default withRouter(BookListing);
