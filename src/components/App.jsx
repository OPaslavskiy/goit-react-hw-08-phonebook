import React from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from '../GlobalStyle';

import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

import { AppBar } from './AppBar/AppBar';

import { Routes, Route } from 'react-router-dom';
import PrivetRoute from './PrivetRoute';

const LogInForm = lazy(() => import('./LogInForm/LogInForm'));
const SignInForm = React.lazy(() => import('./SignInForm/SignInForm'));
const ContactsPage = React.lazy(() => import('./ContactsPage/ContactsPage'));

export const App = () => {
  console.log(LogInForm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Layout>
        <GlobalStyle />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<LogInForm />} />
            <Route path="/register" element={<SignInForm />} />
            <PrivetRoute path="/contacts">
              <ContactsPage />{' '}
            </PrivetRoute>
            {/* <Route path="/contacts" element={<ContactsPage />} /> */}
            <Route path="*" element={<LogInForm />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
