import { RiContactsFill } from 'react-icons/ri';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/auth-selector';

import { NavLink } from 'react-router-dom';
import { Header, Logo, Link } from './AppBar.styled';
import { logOut } from 'redux/auth/auth-operations';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  return (
    <Header className="header">
      <Logo>
        <RiContactsFill style={{ color: '#fff' }} />
        <h1 style={{ color: '#fff' }}>PhoneBook</h1>
      </Logo>

      <div style={{ color: '#fff' }}>
        {isLoggedIn ? (
          <div>
            <p>Hello, {name}</p>
            <Button
              sx={{ marginTop: '5px' }}
              type="button"
              variant="outlined"
              onClick={() => dispatch(logOut())}
            >
              LOG OUT
            </Button>
          </div>
        ) : (
          <p>
            Please,
            <Link to="/">log in</Link>or
            <Link to="register">sign up</Link>...
          </p>
        )}
        {/* <Button variant="outlined">Log in</Button> */}
        {/* <SignIn>
          <p>Are you new user? Please </p>
          <LinkSignIn href="/">SIGN UP</LinkSignIn>
        </SignIn> */}
      </div>
    </Header>
  );
};
