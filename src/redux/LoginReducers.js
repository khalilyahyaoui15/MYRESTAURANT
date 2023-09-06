export const initialState = {
  loading: false,
  // autres propriétés liées à l'état de connexion
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        // autres propriétés que vous souhaitez mettre à jour
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        // autres propriétés que vous souhaitez mettre à jour
      };
    default:
      return state;
  }
};

export default loginReducer;