const initialState = {
  user: '',
  isLoggedIn: false,
  counter: 0,
};

export const reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.login,
      };
    case 'logout':
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.login,
      };
    case 'Add':
      return { ...state, counter: state.counter + 1 };
    case 'Subtract':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
