import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './App';
import Footer from "./view/include/Footer";
import Header from "./view/include/Header";

const Authlayout = ({ children }) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const isLoggedIn = localStorage.getItem('REDUXUSER');

  useEffect(() => {
    if (isLoggedIn) {
      // dispatch({ type: 'LVKARTUSER', payload: merchant });
    } else {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <main className="app-content">{children}</main>
      <Footer />
    </>
  );
};

export default Authlayout;
