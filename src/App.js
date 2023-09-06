import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const performLogin = (username, password) => {
    if (username === '' && password === '') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Routes>
        <Route path="/signin" element={<LoginForm onLogin={performLogin} />} />
        <Route path="/" element={<Outlet />}>
          {loggedIn ? (
            <>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* Add other routes for additional pages */}
            </>
          ) : (
            <Route index element={<LoginForm onLogin={performLogin} />} />
          )}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

