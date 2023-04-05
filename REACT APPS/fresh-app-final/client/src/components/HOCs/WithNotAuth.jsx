import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/slices/userSlice';
import Spinner from '../Spinner/Spinner';

const WithNotAuth = (Component) => {
  class WithSignUp extends React.Component {
    componentDidMount() {
      this.props.checkAuth(this.props.history.replace);
    }

    render() {
      if (this.props.isFetching) {
        return <Spinner mtop />;
      }
      if (!this.props.data) {
        return <Component history={this.props.history} />;
      }
      return null;
    }
  }

  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (replace) => dispatch(getUser(replace)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSignUp);
};

export default WithNotAuth;
