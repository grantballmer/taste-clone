import React from 'react';
import { rateReview, undoRateReview } from "../../store/actions/reviewsActions";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import * as moment from "moment";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSincePost: '',
      numLikes: 0,
      numDislikes: 0
    };
  }

  componentDidMount() {
    const { post } = this.props;
    const now = moment();
    const dateFormat = "YYYY-MM-DD HH:mm:ss";
    const end = moment(new Date(post.timeStamp.seconds * 1000)).format(dateFormat);
    const days = now.diff(end, 'days');
    const hours = now.diff(end, 'hours');
    const timeSincePost = days === 0 ? `${hours} hours ago` : `${days} days ago`;

    this.setState({
      timeSincePost,
      numLikes: post.likes.length,
      numDislikes: post.dislikes.length,

    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post !== this.props.post) {
      const { post } = this.props;
      this.setState({
        numLikes: post.likes.length,
        numDislikes: post.dislikes.length
      })
    }
  }

  handleClick = e => {
    const { likes, dislikes } = this.props.post;
    const { user, post, index, rateReview, undoRateReview } = this.props;
    const username = user[0].username;
    const like = e.currentTarget.dataset.like; //check element user clicked has data-like

    //check if user has already liked/disliked the post
    const hasLiked = likes.includes(username);
    const hasDisliked = dislikes.includes(username);

    //if user clicked like element but has already disliked commment 
    //or if user clicked dislike but has already liked the comment then ignore click
    if ((like && hasDisliked) || (!like && hasLiked)) return;

    //check if user clicked like (thumbs up) or dislike (thumbs down) and grab appropriate array
    const arrToCheck = like ? likes : dislikes;

    //check if array already has username in it, meaning the user has already liked/disliked comment/review
    const indexUserRating = arrToCheck.indexOf(username);
    indexUserRating === -1 ? arrToCheck.push(username) : arrToCheck.splice(indexUserRating, 1);

    const data = {
      like,
      index,
      indexUserRating,
      movieId: String(post.id),
      arr: arrToCheck,
    };

    //if user has not already rated review, then dispatch rateReview action, else undo the rating
    indexUserRating === -1 ? rateReview(data) : undoRateReview(data);
  }

  render() {
    const { post } = this.props;
    const { timeSincePost, numLikes, numDislikes } = this.state;

    return (
      <div className="post">
        <div className="profile-pic">
          
        </div>
        <div className="post__info">
          <p className="post__info--username">{post.username}</p>
          <p className="post__info--date">{timeSincePost}</p>
        </div>
        
        <div className="post__content">{post.review}</div>
        
        <div className="post__likes">
          <div className="post__likes--container" data-like={true} onClick={this.handleClick}>
            <i className="far fa-thumbs-up"></i>
            <p>{numLikes}</p>
          </div>
          <div className="post__likes--container" onClick={this.handleClick} >
            <i className="far fa-thumbs-down"></i>
            <p>{numDislikes}</p>
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users,
    reactions: state.reviews.reactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    rateReview: data => dispatch(rateReview(data)),
    undoRateReview: data => dispatch(undoRateReview(data)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.auth.uid }])
)(Post);
