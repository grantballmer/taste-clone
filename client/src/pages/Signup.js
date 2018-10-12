import React from 'react';
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            username: ''
            // firstName: '',
            // lastName: '',
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    
    
    render() {
        return(
            <div className="container">
                <h1>Create Profile</h1>
                <button className="btn btn__facebook">
                    <img src="/assets/icons/facebook.svg" alt="facebook logo" />
                    <span>Connect with Facebook</span>
                </button>
                <div className="page-splitHr">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange} />
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    { /* <input type="password" name="password2" placeholder="Confirm Password" /> */}
                    <input type="submit" className="btn btn__join" value="Join Now" onChange={this.handleChange} />
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 

// <form action='/signup' method='post'>