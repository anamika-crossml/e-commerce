import React, { useState } from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import img1 from '../images/kato_trouser_1.jpg';
import img2 from '../images/kato_trouser_1-150x150.jpg';
import img3 from '../images/kato_trouser_2-150x150.jpg';
import img4 from '../images/kato_trouser_3-150x150.jpg';

const DetailPage1 = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <Grid container style={{ display: 'flex', marginTop: '300px', marginLeft: '200px' }}>
      {/* First Grid */}
      <Grid item xs={4}>
        <Card sx={{ width: '65%', height: '100%' }}>
          <CardMedia
            component="img"
            src={img1}
            alt="Kato Trouser"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        </Card>
      </Grid>

      {/* Second Grid */}
      <Grid item xs={4}>
        <Grid container item xs={12} flexDirection="column" spacing={2}>
          <Grid item xs={4}>
            <Card sx={{  width: '35%', height: '40%',marginLeft: '-200px' }}>
              <CardMedia component="img" src={img2} alt="Image 2" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{width: '35%', height: '40%',  marginLeft: '-200px', marginTop: '60px' }}>
              <CardMedia component="img" src={img3} alt="Image 3" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{width: '35%', height: '40%',  marginLeft: '-200px',  marginTop: '60px'  }}>
              <CardMedia component="img" src={img4} alt="Image 4" />
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Third Grid */}
      <Grid item xs={4} sx={{ marginLeft: '-600px' }} >
        <Typography
          variant="h2"
          sx={{
            lineHeight: '1.1',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: '26px',
            margin: '0 0 24px 0',
            color: '#404040',
          }}
        >
          Kato Trouser
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            textTransform: 'none',
            color: '#404040',
          }}
        >
          Wool & Cotton Jacket in a minimalistic one-side crop line with leather details on the pocket and the collar.
        </Typography>
        <Typography variant="h5">$92.00</Typography>
        <Typography variant="body2">The product is already in the wishlist! Browse Wishlist</Typography>
      </Grid>
    </Grid>
  );
};

export default DetailPage1;
