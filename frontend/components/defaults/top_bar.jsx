import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import SearchBar from './search_bar';
import UserButtons from './user_buttons';

const TopBar = ({router, currentUser, logout}) => {

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <div className={"top-bar"}>
      <img
        onClick={redirectToHome}
        src="http://res.cloudinary.com/dsguwnfdw/image/upload/v1478115862/dog_icon_rwqkmj.png"
        className={"logo"}
      />

      <SearchBar/>
      <UserButtons currentUser={currentUser} logout={logout}/>
    </div>
  );
};

export default withRouter(TopBar);
