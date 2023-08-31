import React from 'react';
import ImageSlider from './ImageSlider';
import { Typography, Container, Grid } from '@mui/material';

const CoverPage = () => {
  const containerStyle = {
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    marginTop: '40px',
    fontWeight: 'bold',
    color: '#333',
  };

  const descriptionStyle = {
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <ImageSlider />
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h3" align="center" style={headingStyle}>
              🌟 Welcome to FitsWell! 🛍️
            </Typography>
            <Typography variant="body1" align="center" paragraph style={descriptionStyle}>
              Discover your perfect style with FitsWell - your ultimate fashion destination.
              Explore our curated collection of trendy and timeless pieces that fit your personality just right.
              Let your fashion journey begin today!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>  
  );
}

export default CoverPage;
