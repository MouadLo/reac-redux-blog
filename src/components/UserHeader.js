import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		return (
			<div>
				<p>{this.props.user.name}</p>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => {
	return { user };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
