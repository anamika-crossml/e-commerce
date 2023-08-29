import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
          <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              This is a Fitswell website that welcomes you all.<br/> Here you can find a wide range of products and add  according to your preferences.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Email:  nainanamika168@gmail.com<br />
              Phone: +91 7892301930
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="h6">Explore</Typography>
            <Typography variant="body2">
              Discover the best of Fitswell products and services to meet your needs.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ marginTop: '20px' }}>&copy; 2023 Your Company. All rights reserved.</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
