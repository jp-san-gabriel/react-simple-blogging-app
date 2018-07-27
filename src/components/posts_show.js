import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPosts();
  }

  render () {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
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
