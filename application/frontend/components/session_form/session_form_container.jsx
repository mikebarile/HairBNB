import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  if (location.pathname === '/login') {
    return {
      formType: 'login',
      processForm: (user) => dispatch(login(user))
    };
  }
  else {
    return {
      formType: 'signup',
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
