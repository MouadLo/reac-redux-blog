import jsonPalceholder from '../api/jsonPlaceHolder';

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
