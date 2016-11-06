import React from 'react';
import { Link } from 'react-router';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  render() {

    return (
      <div className="add-listing">
        TEST
      </div>
    );
  }
}



export default AddListing;
