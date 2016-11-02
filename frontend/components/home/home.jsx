import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
      super(props);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    return(
      <div className="home">
        <img src="http://res.cloudinary.com/dsguwnfdw/image/upload/v1478119352/dog-gif_scd4ez.gif"/>
      </div>
    );
  }
}

export default Home;
