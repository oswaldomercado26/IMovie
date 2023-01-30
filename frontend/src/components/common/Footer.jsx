import { Paper, Stack,  Box } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';

//crear el footer con las opciones de principales
const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <Box>

          CUCEI PROYECTO MODULAR
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
