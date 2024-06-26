import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const PersonalDetails = () => {
  return (
    <Container
      sx={{
        width: '20vw',
        height: '100vh',
        
        marginTop: 10,
        marginRight: 8,
        backgroundColor: 'white',
        boxShadow: 3,
      }}
    >
      <Typography variant="h2" color="text.secondary" align="left" sx={{mt: 12, ml: 8}} >Welcome, </Typography>
    </Container>
  );
};

export default PersonalDetails;
