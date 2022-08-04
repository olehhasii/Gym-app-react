import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	value: 0,
	email: '',
	isFetching: false,
	isSucces: false,
	errorMessage: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
