import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search_bar';

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
        <div className="dog-gif">
          <span className="home-header">TIME FOR DOGGY VACATION</span>
          <span className="home-subheader">Send your best friend to stay with local hosts in 190 countries</span>
        </div>
        <SearchBar/>
      </div>

    );
  }
}

export default Home;
