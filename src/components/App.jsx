import React from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from '../GlobalStyle';

import { AppBar } from './AppBar/AppBar';
import { LogInForm } from './LogInForm/LogInForm';
import { SignInForm } from './SignInForm/SignInForm';
import { ContactsPage } from './ContactsPage/ContactsPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
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
