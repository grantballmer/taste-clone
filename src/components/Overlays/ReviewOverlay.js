import React from 'react';
import { removeOverlay } from "../../store/actions/movieActions";
import { addReview } from "../../store/actions/reviewsActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class ReactionOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      movie: null,
      postVal: ''
    };
  }

  componentDidUpdate(previousProps, previousState) {

    if (previousProps.overlay.displayReactions !== this.props.overlay.displayReactions) {
      const { displayReactions, movie } = this.props.overlay;

      this.setState({
        movie: movie,
        display: displayReactions
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { postVal, movie } = this.state;
    const { removeOverlay, addReview, user } = this.props;
    const date = new Date();

    const data = {
      id: movie.id,
      review: postVal,
      likes: [],
      dislikes: [],
      timeStamp: date,
      username: user[0].username
    };

    addReview(data);
    removeOverlay();
  }

  handleChange = e => {
    const postVal = e.target.value;
    this.setState({ postVal });
  }

  handleKeyDown = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleSubmit(e);
    }
  }


  render() {
    const { removeOverlay } = this.props;
    const { movie, display, postVal } = this.state;
    const classVar = display ? "overlay-show" : "";

    return (
      <div className={`overlay overlay-signup ${classVar}`}>
        <p className="overlay__cancel" onClick={removeOverlay}>
          {"\u2716"}
        </p>
        {display &&
        <div className="popup-reactions" 
         style={{ background: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }}
        >
          <div className='popup-reactions__flex'>
            <p>{movie.title}</p>
            <p>{140 - postVal.length}</p>
          </div>
          <form className="popup-reactions__form" onSubmit={this.handleSubmit} >
            <textarea name="reaction" 
              placeholder="Enter your review here"
              maxLength="140"
              className="popup-reactions__input"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </form>
          
          <div className="bubble bubble__reactions" onClick={this.handleSubmit}>POST</div>
        
      
        </div> 
        }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users,
    isLoggedIn: state.auth.authenticated,
    overlay: state.movies.overlay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: data => dispatch(addReview(data)),
    removeOverlay: () => dispatch(removeOverlay())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.auth.uid }])
)(ReactionOverlay);
