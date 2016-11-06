import React from 'react';
import { Link } from 'react-router';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      host_id: this.props.currentUser.id,
      lat: null,
      lng: null,
      street_address: "",
      city: "",
      zip_code: "",
      state: "",
      country: "",
      image_url: "",
      apt_num: "",
      desscription: "",
      price: "",
      dog_walks: false,
      deluxe_bed: false,
      house_cat: false,
      gourmet_food: false,
      chew_toys: false,
      frisbee: false,
      mailman: false,
      grooming: false,
      cuddle_buddy: false,
      indoor_poop: false,
      indoor_pee: false,
      barking: false,
      whining: false,
      begging: false,
      shedding: false,
    };
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
