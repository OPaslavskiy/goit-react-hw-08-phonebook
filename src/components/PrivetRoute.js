import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { selectIsRefreshing } from 'redux/authorization/selectors';
import { Routes, Route } from 'react-router-dom';

export default function PrivetRoute({ children, ...routeProps }) {
  return <Route {...routeProps}>{children}</Route>;
}
