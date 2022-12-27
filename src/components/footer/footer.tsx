import React from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";


export function Footer(){
   return ( 
             <Box sx={{ width: "100%", height: "1000%", bgcolor: "#29AB87" }}>
                    <Container maxWidth="lg">
                       <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                               <Box borderBottom={1}>column1</Box>
                                 <Box>
                                     <Link style={{}} 
                                         to="/">
                                          link1
                                     </Link>
                                 </Box>
                                  
                            </Grid>
                       </Grid>
                    </Container>
             </Box>  
   );
}

