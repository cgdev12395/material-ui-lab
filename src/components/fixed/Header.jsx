import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const textButtons = ["About", "Admin", "Credentials", "Settings"];

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{backgroundColor: theme.palette.tertiary.main}}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="logo.png" alt="Logo" style={{ marginRight: '16px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {textButtons.map ((txt) => <Button sx={{ color: theme.palette.texts.white, marginLeft: 2 }}>{txt}</Button>)}
          <IconButton color="inherit">
            <Avatar alt="Avatar" src="avatar.png" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
