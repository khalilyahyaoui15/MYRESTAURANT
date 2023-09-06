import React, { useState } from 'react';
import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/LoginActions'; 
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSubmitting = useSelector((state) => state.login.loading);
  const loginError = useSelector((state) => state.login.error);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginRequest(email, password));
    handleLoginSuccess();
  };
  
  const handleLoginSuccess = () => {
    navigate('/');
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} noValidate className="signin-form">
      <Avatar>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      {loginError && <div>Error: {loginError}</div>}
    </form>
  );

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <div className="signin-container">
          <div className="signin-content">{renderForm()}</div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;


