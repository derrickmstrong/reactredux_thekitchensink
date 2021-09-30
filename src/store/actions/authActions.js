import * as ActionTypes from '../actionTypes'
// import history from '../../history';

export const signIn = (userId, email, name, imgUrl) => {
  return {
    type: ActionTypes.SIGN_IN,
    payload: {
      userId,
      email, 
      name,
      imgUrl,
    },
  };
};

export const signOut = () => {
  // Programmatic navigation
  // Get user back to the root route
  // history.push('/');

  return {
    type: ActionTypes.SIGN_OUT,
  };
};
