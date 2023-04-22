import { RiContactsFill } from 'react-icons/ri';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/auth-selector';

import { Header, Logo, Link, LogoLink } from './AppBar.styled';
import { logOut } from 'redux/auth/auth-operations';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  return (
    <Header className="header">
      <Logo>
        <RiContactsFill style={{ color: '#fff' }} />
        <LogoLink to="/">PhoneBook</LogoLink>
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
            <Link to="login">log in</Link>or
            <Link to="register">sign up</Link>...
          </p>
        )}
      </div>
    </Header>
  );
};
