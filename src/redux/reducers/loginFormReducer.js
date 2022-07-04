const initialState = {
	login: {
		name: '',
		email: '',
		password: '',
		verifyPassword: ''
	},
};

export const loginFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_FORM":
			return {
				...state,
				login: action.payload,
			};
		default:
			return state;
	}
};
		