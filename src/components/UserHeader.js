import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
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

export default connect(mapStateToProps)(UserHeader);
