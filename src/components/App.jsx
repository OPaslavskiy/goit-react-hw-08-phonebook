import React from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from '../GlobalStyle';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

import { AppBar } from './AppBar/AppBar';
import { LogInForm } from './LogInForm/LogInForm';
import { SignInForm } from './SignInForm/SignInForm';
import { ContactsPage } from './ContactsPage/ContactsPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Layout>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<LogInForm />} />
          <Route exact path="/register" element={<SignInForm />} />
          <Route exact path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </>
  );
};
