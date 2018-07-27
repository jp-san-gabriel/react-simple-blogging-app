import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPosts();
  }

  render () {
    posts[this.props.match.params.id];
    return (
      <div>
        Post Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //equivalent to posts = state.posts
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPosts })(PostsShow);
