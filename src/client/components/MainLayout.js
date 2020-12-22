import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      { children }
    <p> Footer </p>
    </React.Fragment>
  );
};

export default MainLayout;
