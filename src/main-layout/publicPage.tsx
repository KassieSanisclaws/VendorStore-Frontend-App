import React from 'react';
import { Container, Box, Typography, CssBaseline, Grid } from '@mui/material';
import { useThemeMode } from '../main';


export function PublicPage() {
  // 1. Integrate useThemeMode hook to fetch the current mode.
  const { mode } = useThemeMode();

  return (
    <Container maxWidth="xl" sx={{ height: "100%" }}>
      <Box sx={{ height: "100%" }}>
        <Container sx={{ bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", height: "90vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
          <CssBaseline />
          <Box sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "30vh", width: "100%", overflow: "hidden",}}>
            h1. div 1
          </Box>

          <Box sx={{ width: "100%", flexGrow: 1, position: "relative", top: "5rem" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={3} sm={4} key={index}>
                  <Box sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "40vh" }}>
                    boxes
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Container>
      </Box>
    </Container>
  );
}

