import React, { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress, Alert, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await axios.post('https://docuthinker-ai-app.onrender.com/login', { email, password });
      setLoading(false);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      setLoading(false);
      setError('Login failed. Please try again.');
    }
  };

  return (
      <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', // Align to the top
            paddingTop: '3rem', // Add padding at the top
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
            transition: 'background-color 0.3s ease',
          }}
      >
        <Box
            sx={{
              maxWidth: '400px',
              width: '100%',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: theme === 'dark' ? '#333' : 'white',
              color: theme === 'dark' ? 'white' : 'black',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
          <Typography
              variant="h4"
              sx={{
                marginBottom: '1.5rem',
                textAlign: 'center',
                color: '#f57c00',
                font: 'inherit',
                fontWeight: 600,
                fontSize: '30px',
              }}
          >
            Login
          </Typography>

          {/* Error Alert */}
          {error && (
              <Alert severity="error" sx={{ marginBottom: '1.5rem' }}>
                {error}
              </Alert>
          )}

          {/* Email Input */}
          <TextField
              label="Email"
              type="email"
              fullWidth
              required
              sx={{
                marginBottom: '1.5rem',
                backgroundColor: theme === 'dark' ? '#555' : '#fff',
                borderRadius: '8px',
                font: 'inherit',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
              InputLabelProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
          />

          {/* Password Input */}
          <TextField
              label="Password"
              type="password"
              fullWidth
              required
              sx={{
                marginBottom: '1.5rem',
                backgroundColor: theme === 'dark' ? '#555' : '#fff',
                borderRadius: '8px',
                font: 'inherit',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
              InputLabelProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
          />

          {/* Login Button */}
          <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              sx={{
                backgroundColor: '#f57c00',
                color: 'white',
                font: 'inherit',
                padding: '0.75rem',
                '&:hover': {
                  backgroundColor: '#e68900',
                },
              }}
              disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
          </Button>

          {/* Forgot Password Link */}
          <Box sx={{ marginTop: '1.5rem', textAlign: 'center', color: '#f57c00' }}>
            <Link
                component="button"
                variant="body2"
                sx={{
                  color: '#f57c00',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  font: 'inherit',
                  '&:hover': {
                    textDecoration: 'underline', // Only underline on hover
                    backgroundColor: 'transparent', // No background color change on hover
                  },
                }}
                onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </Link>
          </Box>
        </Box>
      </Box>
  );
};

export default Login;
