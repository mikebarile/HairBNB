import React from 'react';
import { Link } from 'react-router';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listingFormState;
  }

  componentDidMount() {
    this.setState({host_id: this.props.currentUser.id});
    this.props.updateListingForm(this.state);
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
