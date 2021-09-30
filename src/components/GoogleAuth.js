import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/authActions';
import { bindActionCreators } from 'redux';
import { Dropdown } from 'semantic-ui-react';

const GoogleAuth = () => {
  const [auth, setAuth] = useState(null);

  const { isSignedIn, name, imgUrl } = useSelector(state => state.auth);
  console.log(isSignedIn)
  const dispatch = useDispatch();

  const { signIn, signOut } = bindActionCreators(AuthActions, dispatch);

  useEffect(() => {
    const params = {
      clientId: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`, // Remember to restart server to get new .env variables to register
      scope: 'profile',
    };

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init(params).then(() => {
        setAuth(window.gapi.auth2.getAuthInstance());
        onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
      });
    });
  }, []);

  const onAuthChange = isSignedIn => {
    // Access profile information
    const authInstance = window.gapi.auth2.getAuthInstance();
    const user = authInstance.currentUser.get();
    console.log(user)
    const userId = user.getId();
    const name = user.dt['Se'];
    console.log(name)
    const profile = user.getBasicProfile();
    const email = profile.getEmail();
    const imgUrl = profile.getImageUrl();

    if (isSignedIn) {
      // dispatch(signIn(userId, name, email, imgUrl));
      dispatch(
        signIn(userId, email, name, imgUrl)
      );
    } else {
      dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Dropdown
          text={name}
          icon='google'
          floating
          labeled
          button
          className='icon'
        >
          <Dropdown.Menu>
            <Dropdown.Header content='Account Options' />
            <Dropdown.Item
              image={{ avatar: true, src: `${imgUrl}` }}
              onClick={onSignOutClick}
              text='Sign Out'
            />
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <button className='ui button primary' onClick={onSignInClick}>
          <i className='icon google'></i>
          Sign In
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
