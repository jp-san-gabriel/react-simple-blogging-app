import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPosts();
  }

  render () {
    const { post } = this.props;

    return (
      <div>
        <h3> { post.title } </h3>
        <h6> Categories: { post.categories } </h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //equivalent to posts = state.posts
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPosts })(PostsShow);
