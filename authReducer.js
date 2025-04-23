const initialState = {
    user: null,
    registeredUsers: [], // simulate registered DB
  };
  
  const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          registeredUsers: [...state.registeredUsers, action.payload],
          user: action.payload,
        };
      case 'LOGIN_SUCCESS':
        const isRegistered = state.registeredUsers.find(
          u => u.email === action.payload.email && u.password === action.payload.password
        );
        return {
          ...state,
          user: isRegistered || null,
        };
      case 'LOGOUT':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;