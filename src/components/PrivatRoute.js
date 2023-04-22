import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/auth-selector';
import { selectIsRefreshing } from '../redux/auth/auth-selector';
import { Routes, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" /> : Component;
};
