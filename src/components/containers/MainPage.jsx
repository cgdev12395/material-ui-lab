import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const MainPage = () => {
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
      <Typography variant="h2" color="text.secondary" align="left" sx={{mt: 4, ml: 8}} >Welcome, John!</Typography>
      <Box sx={{ width: '90%', mx: 'auto', mt: 2 }}>
        <Divider />
      </Box>
    </Box>
  );
};

export default MainPage;
