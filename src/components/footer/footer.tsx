import React from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";


export function Footer(){
   return ( 
             <Box sx={{ width: "100%", height: "1000%", bgcolor: "#29AB87" }}>
                    <Container maxWidth="xl" >
                       <Grid container spacing={{xs: 2, md: 3 }} columnSpacing={{sx: 4, sm: 8, md: 12 }} justifyContent="center">
                            <Grid item xs={1} sm={4} md={4} >
                               <Box borderBottom={1.5} width="25%">column1</Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}} 
                                         to="/">
                                          link1
                                     </Link>
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link2
                                     </Link>  
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link3
                                     </Link>  
                                 </Box>
                            </Grid>

                            <Grid item xs={14} sm={4} marginLeft="-13rem">
                               <Box borderBottom={1.5} width="25%">column2</Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}} 
                                         to="/">
                                          link1
                                     </Link>
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link2
                                     </Link>  
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link3
                                     </Link>  
                                 </Box>
                            </Grid>

                            <Grid item xs={1} sm={4} marginLeft="-10rem">
                               <Box borderBottom={1.5} width="25%">column3</Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}} 
                                         to="/">
                                          link1
                                     </Link>
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link2
                                     </Link>  
                                 </Box>
                                 <Box>
                                     <Link style={{textDecoration: "none", color: "#fff"}}
                                          to="/">
                                          link3
                                     </Link>  
                                 </Box>
                            </Grid>
                       </Grid>
                       <Box textAlign="center" pt={{xs: 5, sm: 10 }} pb={{xs: 5, sm: 0}}>
                           Kassie BCB &reg; {new Date().getFullYear()} 
                       </Box>
                    </Container>
             </Box>  
   );
}

