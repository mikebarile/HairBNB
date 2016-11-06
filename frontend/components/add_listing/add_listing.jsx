import React from 'react';
import { Link } from 'react-router';
import { merge } from 'lodash';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.props.updateListingForm({host_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  updateState(newState) {
    this.setState(newState);
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
