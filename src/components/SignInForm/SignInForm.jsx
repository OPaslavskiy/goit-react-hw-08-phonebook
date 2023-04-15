import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { SignInSection, Registered, Text, Link } from './SignInForm.styled';

export const SignInForm = () => {
  const [formDataSignIn, setFormDataSignIn] = useState({
    login: '',
    email: '',
    password: '',
  });

  const handleSubmit = event => {
    console.log(formDataSignIn);
    event.preventDefault();
    setFormDataSignIn({
      login: '',
      email: '',
      password: '',
    });
  };

  // відправка запиту на реєстрацію!!!!!!!!!!!!!!!!

  return (
    <div>
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
            id="login"
            name="login"
            required
            fullWidth
            value={formDataSignIn.login}
            onChange={event =>
              setFormDataSignIn({
                ...formDataSignIn,
                login: event.target.value,
              })
            }
          />
          <TextField
            variant="standard"
            type="email"
            label="E-mail"
            id="email"
            name="email"
            required
            fullWidth
            value={formDataSignIn.email}
            onChange={event =>
              setFormDataSignIn({
                ...formDataSignIn,
                email: event.target.value,
              })
            }
          />
          <TextField
            type="password"
            variant="standard"
            label="Password"
            name="password"
            id="password"
            required
            fullWidth
            value={formDataSignIn.password}
            onChange={event =>
              setFormDataSignIn({
                ...formDataSignIn,
                password: event.target.value,
              })
            }
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
          <Link href="/">LOG IN</Link>
        </Registered>
      </SignInSection>
    </div>
  );
};
