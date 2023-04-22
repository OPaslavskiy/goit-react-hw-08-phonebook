import React from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from '../GlobalStyle';

import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

import { AppBar } from './AppBar/AppBar';

import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivatRoute';

import { RestrictedRoute } from './RestrictedRoute';
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));
const SignInForm = React.lazy(() => import('./SignInForm/SignInForm'));
const ContactsElements = React.lazy(() =>
  import('./ContactsElements/ContactsElements')
);
const AboutProject = lazy(() => import('./AboutProject/AboutProject'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <GlobalStyle />
      <Layout />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<AboutProject />} />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInForm />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SignInForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/contacts"
                component={<ContactsElements />}
              />
            }
          />

          <Route path="*" element={<LogInForm />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
};
