import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './styles/global.css'
import { Grid2 } from '@mui/material';


export default function Home() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <CssBaseline />
      <Box
        component="section"
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Container
          className="container-text-logo-presentation"
          maxWidth={false}
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#222222',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Imagen circular más grande */}
            <Grid item>
              <Box
                component="img"
                src="https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?cs=srgb&dl=pexels-pripicart-516927.jpg&fm=jpg"
                alt="Profile"
                sx={{
                  width: 150, // Tamaño más grande
                  height: 150, 
                  borderRadius: '50%', // Hace la imagen circular
                  objectFit: 'cover', // Ajusta la imagen dentro del círculo sin deformarla
                  boxShadow: 3, // Agrega una pequeña sombra
                }}
              />
            </Grid>

            {/* Texto */}
            <Grid item>
              <h2>Hi, I'm Miguel 👋</h2>
              <h1>Frontend Developer</h1>
              <h2>That loves creating web apps</h2>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
