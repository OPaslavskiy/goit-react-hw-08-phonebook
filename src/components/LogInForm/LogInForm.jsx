import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { logIn } from '../../redux/auth/auth-operations';

import { useDispatch } from 'react-redux';

import { LogInSection, NotRegistered, Text, Link } from './LogInForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    dispatch(logIn({ email, password }));
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  // відправка запиту на вхід!!!!!!!!!!!!!!!!

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h2 style={{ justifyContent: 'center', display: 'flex' }}>
        Please, log in...
      </h2>
      <LogInSection>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            width: '460px',
            gap: '20px',
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            variant="standard"
            type="email"
            label="E-mail"
            id="email"
            name="email"
            required
            fullWidth
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            type="password"
            variant="standard"
            label="Password"
            name="password"
            id="password"
            required
            fullWidth
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enter
          </Button>
        </Box>
        <NotRegistered>
          <Text>Are you not registered? Well, go and register here</Text>
          <Link href="/">SIGN UP</Link>
        </NotRegistered>
      </LogInSection>
    </div>
  );
};
