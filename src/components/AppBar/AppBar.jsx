import { RiContactsFill } from 'react-icons/ri';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selector';

import { Header, Logo, SignIn, LinkSignIn } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header class="header">
      <Logo>
        <RiContactsFill style={{ color: '#fff' }} />
        <h1 style={{ color: '#fff' }}>PhoneBook</h1>
      </Logo>

      <div style={{ color: '#fff' }}>
        {isLoggedIn && <div>WAW</div>}
        {/* <Button variant="outlined">Log in</Button> */}
        {/* <SignIn>
          <p>Are you new user? Please </p>
          <LinkSignIn href="/">SIGN UP</LinkSignIn>
        </SignIn> */}
      </div>
    </Header>
  );
};
