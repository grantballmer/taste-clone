import React from "react";
import { connect } from "react-redux";
import { facebookSignUp } from "../../store/actions/authActions";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';
const imagePath = process.env.PUBLIC_URL + '/assets/images';

class SmallBanner extends React.Component {

  handleClick = () => {
    this.props.facebookSignUp();
  }

  render() {
    return (
      <div className="banner banner__small" style={{background: `url(${imagePath}/movielist.jpg)`}}>
        <div className="profile profile__small">
          {/* <img src="./assets/icons/avatar.svg" alt="sample avatar" /> */}
          <img src={`${iconPath}/avatar.svg`} alt="sample avatar" />
          <div className="profile__details">
            <h2>Taste Profile</h2>
            <h2>
              0<span>%</span>
            </h2>
          </div>
        </div>
        <button className="btn btn__smallBanner" onClick={this.handleClick} >
          <img src={`${iconPath}/facebook.svg`} alt="google logo" />
          <span>Sign Up</span>
        </button>
      </div>
    );
  }
  
};

const mapDispatchToProps = (dispatch) => {
  return {
    facebookSignUp: () => dispatch(facebookSignUp())
  };
};

export default connect(null, mapDispatchToProps)(SmallBanner);

// export default SmallBanner;
