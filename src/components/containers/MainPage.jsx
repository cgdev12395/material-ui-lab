import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MainPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '70vw',
        height: '100vh',
        
        marginTop: 10,
        marginRight: 2,
        backgroundColor: 'white',
        boxShadow: 3,
      }}
    >
      <Typography variant="h2" align="left" sx={{mt: 4, ml: 8, color: theme.palette.texts.main}} >Welcome, John!</Typography>
      <Box sx={{ width: '90%', mx: 'auto', mt: 2, color: theme.palette.divider.main }}>
        <Divider />
      </Box>
      <Typography variant="h5" align="left" sx={{mt: 4, ml: 2, color: theme.palette.texts.main}} >Your credentials:</Typography>
    </Box>
  );
};

export default MainPage;
