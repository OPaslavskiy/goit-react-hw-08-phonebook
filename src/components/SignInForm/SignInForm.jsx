import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { SignInSection, Registered, Text, Link } from './SignInForm.styled';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = ({ target: { login, value } }) => {};

  const handleSubmit = event => {
    dispatch(register({ name, email, password }));
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h2 style={{ justifyContent: 'center', display: 'flex' }}>
        Please, sign up...
      </h2>
      <SignInSection>
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
            type="login"
            label="Login"
            id="name"
            name="name"
            required
            fullWidth
            value={name}
            onChange={event => setName(event.target.value)}
          />
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
            Sign up
          </Button>
        </Box>
        <Registered>
          <Text>Are you already registered? Please</Text>
          <Link to="/login">LOG IN</Link>
        </Registered>
      </SignInSection>
    </div>
  );
};

export default SignInForm;
