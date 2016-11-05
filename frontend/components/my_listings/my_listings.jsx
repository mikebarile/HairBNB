import React from 'react';

class MyListings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchListings({"host_id": this.props.currentUser.id});
  }

  render() {
    return (
      <div>
        TEST
      </div>
    );
  }
}

export default MyListings;
