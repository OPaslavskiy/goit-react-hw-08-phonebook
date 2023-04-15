import { RiContactsFill } from 'react-icons/ri';
import Button from '@mui/material/Button';

import { Header, Logo, SignIn, LinkSignIn } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header class="header">
      <Logo>
        <RiContactsFill style={{ color: '#fff' }} />
        <h1 style={{ color: '#fff' }}>PhoneBook</h1>
      </Logo>

      <div style={{ color: '#fff' }}>
        <Button variant="outlined">Log in</Button>
        <SignIn>
          <p>Are you new user? Please </p>
          <LinkSignIn href="/">SIGN UP</LinkSignIn>
        </SignIn>
      </div>
    </Header>
  );
};
