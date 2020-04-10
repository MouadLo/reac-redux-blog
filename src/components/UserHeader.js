import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		if (!this.props.user) {
			return null;
		}
		return (
			<div>
				<p>{this.props.user.name}</p>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find((user) => user.id === ownProps.userId),
	};
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
