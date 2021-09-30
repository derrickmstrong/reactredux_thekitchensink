import React from 'react';
import { useSelector } from 'react-redux';

const Test = () => {
  const { userId, email, name, imgUrl } = useSelector(state => state.auth);
  console.log(userId);
  const renderUserInfo = () => {
    return userId ? (
      <div>
        <img src={imgUrl} alt="" srcSet="" />
        <p>UserId: {userId}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    ) : (
      'Please sign in in order to access About page'
    );
  };

  return <div>{renderUserInfo()}</div>;
};

export default Test;
