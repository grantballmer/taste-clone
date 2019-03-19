import React from 'react';
import { connect } from "react-redux";
import { signIn, facebookSignUp } from "../store/actions/authActions";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = () => {
    this.props.facebookSignUp();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError } = this.props;
    return (
      <section className="container">
      
        <div className="login-container">
          <h1>Create Profile</h1>
          
          <button className="btn btn__facebook" onClick={this.handleClick}>
            <img src={`${iconPath}/facebook.svg`} alt="facebook logo" />
            <span>Connect with Facebook</span>
          </button>
          
          <div className="page-splitHr">
            <hr />
            <p>OR</p>
            <hr />
          </div>
            
          <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            <input type="submit" className="btn btn__join" value="Log In" />
            <div className="error">
                {authError && <p>{authError}</p>}
            </div>
          </form>
        
        </div>
          
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    facebookSignUp: () => dispatch(facebookSignUp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// <form action='/login' method='post'>
