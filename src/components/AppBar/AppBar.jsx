import { RiContactsFill } from 'react-icons/ri';
import Button from '@mui/material/Button';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header class="header">
      <div>
        <RiContactsFill />
        <h1>PhoneBook</h1>
      </div>

      <div>
        <Button variant="outlined">Log in</Button>
        <p>Are you new user? Please </p>
        <a href="/">sing in</a>
      </div>
    </Header>
  );
};
