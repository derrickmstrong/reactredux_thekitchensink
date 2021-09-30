import React from 'react';
import { useSelector } from 'react-redux';

const Test = () => {
  const { userId } = useSelector(state => state.auth);

  const renderTest = () => {
    return userId ? 'Test Component' : 'Please sign in in order to access Test page';
  };

  return <div>{renderTest()}</div>;
};

export default Test;
