import React from "react";
import { AppBar, Toolbar, IconButton, Stack, Button, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <AppBar position="static" sx={{bgcolor:"#29AB87",}}>

             <Toolbar>
                 <IconButton size="large" edge="start" color="secondary" aria-label="logo">
                       <CatchingPokemonIcon/> {/* this line will change for icon img  */}
                  </IconButton>
                  
                   <Typography variant="h5" component="div" sx={{flexGrow: 1 }}>
                        <Link style={{textDecoration: "none", color: "#fff" }} 
                          to="/">
                           VendorStoreApp
                        </Link>
                   </Typography>

                   <Stack direction="row" spacing={2}>
                        <Button color="inherit" >
                           <Link style={{textDecoration: "none", color: "#fff" }} 
                               to="/about" >
                               {"About"}
                            </Link>
                         </Button>
                        <Button color="inherit">
                            <Link style={{textDecoration: "none", color: "#fff" }} 
                               to="/login">
                                Login
                             </Link>
                         </Button>
                        <Button color="inherit">
                            <Link style={{ textDecoration: "none", color: "#fff" }}
                               to="/register">
                                Register
                            </Link>
                         </Button>
                        <Button color="inherit">
                            <Link style={{ textDecoration: "none", color: "#fff" }} 
                               to="/vendorportal">
                                Vendor
                            </Link>
                         </Button>
                        <Button color="inherit">
                            <Link style={{ textDecoration: "none", color: "#fff" }}
                               to="/contactus">
                                 ContactUs
                            </Link>
                        </Button>
                   </Stack>

             </Toolbar>
        </AppBar>
    );
}