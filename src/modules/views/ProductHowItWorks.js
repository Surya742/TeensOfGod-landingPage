import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
        Volunteers
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/* <Box sx={number}>1.</Box> */}
                <Box
                  component="img"
                  src="https://teensofgod.org/wp-content/uploads/2021/05/suraj.png"
                  alt="suitcase"
                  sx={image}
                  style= {{borderRadius: 50}}
                />
                <Typography variant="h6" align="center">
                    Suraj Agarwal
                </Typography>
                <Typography variant="h5" align="center">
                    Senior Vice President, Honda Motorcycles and Scooters India Pvt. Ltd.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/* <Box sx={number}>2.</Box> */}
                <Box
                  component="img"
                  src="https://teensofgod.org/wp-content/uploads/2021/05/Rajendar.png"
                  alt="graph"
                  sx={image}
                  style= {{borderRadius: 50}}
                />
                <Typography variant="h6" align="center">
                Rajinder Kumar Dhingra
                </Typography>
                <Typography variant="h5" align="center">
                Assistant General manager, State Bank Of India
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/* <Box sx={number}>3.</Box> */}
                <Box
                  component="img"
                  src="https://teensofgod.org/wp-content/uploads/2021/05/1536478642660.jpg"
                  alt="clock"
                  sx={image}
                  style= {{borderRadius: 50}}
                />
                <Typography variant="h6" align="center">
                Sanjay Jain
                </Typography>
                <Typography variant="h5" align="center">
                Group CTO, Den Networks
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/signup"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;