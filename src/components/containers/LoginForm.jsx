import React from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LoginForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '2rem',
          width: '400px',
          height: '400px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          gap: 2
        }}
      >
        <Typography variant="h5">
          Login
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.main, marginTop: '1rem' }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
