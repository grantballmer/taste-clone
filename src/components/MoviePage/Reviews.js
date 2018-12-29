import React from 'react';
import Post from "./Post";
import { updateOverlay } from '../../store/actions/movieActions';
import { connect } from "react-redux";

class Reactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const { reactions } = this.props;
    this.setState({ posts: reactions });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.reactions !== this.props.reactions) {
      this.setState({ posts: this.props.reactions });
    }
  }

  handleClick = () => {
    const { movie, updateOverlay, auth } = this.props;

    let data = {
      movie,
      displayReactions: true
    };

    if (!auth) { data = { displayOverlay: true } }

    updateOverlay(data);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="reactions-container">
        <div className="reactions-heading">
          <p>Reactions</p>
          <div className="reactions-heading__click" onClick={this.handleClick} >
            <i className="fas fa-pencil-alt"></i>
            <p>Write Reaction</p>
          </div>
        </div>
        
        {posts.length > 0 
        ?
          posts.map((post, index) => {
            return (
              <Post post={post} index={index} key={post.timeStamp}/>
            );
          })
        : 
          <div className="reactions-empty">Be the first to write a reaction</div>
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reactions: state.reviews.reactions,
    overlay: state.movies.overlay,
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOverlay: data => dispatch(updateOverlay(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reactions);
