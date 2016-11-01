import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

const TopBar = ({router, currentUser, logout}) => {

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <div>
      <img
        onClick={redirectToHome}
        src="/assets/dog_icon.png"
        className={"Logo"}
      />

    </div>
  );


  // if (currentUser !== null) {
  //   return (
  //     <div>
  //       <h2>Welcome {currentUser.username}!</h2>
  //       <br/>
  //       <button onClick={logout}>Logout</button>
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div>
  //       <Link to="/signup">Signup</Link> or
  //       <Link to="/login"> Login</Link>!
  //     </div>
  //   );
  // }
};

export default withRouter(TopBar);
