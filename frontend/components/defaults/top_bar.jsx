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
        src="/assets/dog_icon.png"
        className={"logo"}
      />

      <SearchBar/>
      <UserButtons currentUser={currentUser} logout={logout}/>
    </div>
  );
};

export default withRouter(TopBar);
