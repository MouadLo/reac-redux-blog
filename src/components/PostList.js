import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}
	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			);
		});
	}
	render() {
		return <div className="ui relaxed devided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.replaceMe };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
