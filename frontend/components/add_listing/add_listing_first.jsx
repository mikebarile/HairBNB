import React from 'react';
import { Link } from 'react-router';

class AddListingFirst extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateListingForm({host_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        TEST
      </div>
    );
  }
}

export default AddListingFirst;
