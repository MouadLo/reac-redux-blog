import _ from 'lodash';
import jsonPalceholder from '../api/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	const userIds = _.uniq(_.map(getState().replaceMe, 'userId'));
	userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPalceholder.get('/posts');
	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data,
	});
};

export const fetchUser = (userId) => async (dispatch) => {
	const response = await jsonPalceholder.get(`/users/${userId}`);
	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
};
// export const fetchUser = (userId) => (dispatch) => {
// 	_fetchUser(userId, dispatch);
// };

// const _fetchUser = _.memoize(async (userId, dispatch) => {
// 	const response = await jsonPalceholder.get(`/users/${userId}`);
// 	dispatch({
// 		type: 'FETCH_USER',
// 		payload: response.data,
// 	});
// });
