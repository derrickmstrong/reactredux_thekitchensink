const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  email: null,
  name: null,
  imgUrl: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        email: action.payload.email,
        name: action.payload.name,
        imgUrl: action.payload.imgUrl,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        email: null,
        name: null,
        imgUrl: null,
      };
    default:
      return state;
  }
};
