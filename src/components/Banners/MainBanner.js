import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { facebookSignUp } from "../../store/actions/authActions";
const imagePath = process.env.PUBLIC_URL + "/assets/images";

class MainBanner extends React.Component {
  handleClick = () => {
    this.props.facebookSignUp();
  };

  render() {
    // const { auth } = this.props;

    return (
      <div
        className="banner banner__main"
        style={{ backgroundImage: `url(${imagePath}/movielist.jpg)` }}
      >
        <div className="profile">
          <img src="./assets/icons/avatar.svg" alt="sample avatar" />
          <div className="profile__details">
            <h2>Taste Profile</h2>
            <h2>
              0<span>%</span>
            </h2>
          </div>
        </div>
        <h1>Movie recommendations based on your taste.</h1>
        <button className="btn btn__banner" onClick={this.handleClick}>
          <img src="./assets/icons/facebook.svg" alt="facebook logo" />
          <span>Connect with Facebook</span>
        </button>
        <Link to="/login" className="banner__link">
          Start Without Facebook
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    facebookSignUp: () => dispatch(facebookSignUp())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBanner);
