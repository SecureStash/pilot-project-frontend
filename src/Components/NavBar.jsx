import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";

export default function NavBar() {
    const navs = ['Home', 'About', 'Serices', 'Roadmap']
    return (
        // <Box sx={{  padding: 0, margin: 0 }}>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', flexGrow: 1, margin: 0 }}>
            <Toolbar>
                <img src={require("../assets/images/logo.png")} width='3%' height='3%' />
                <Typography variant="h3" fontFamily='LogoFont' width='50%'>
                    Secure Stash
                </Typography>
                {navs.map(nav => (
                    <Button className='hoverColor' variant="text" sx={{ color: window.location.pathname === nav.toLowerCase() ? 'rgb(132, 232, 162)' : 'white', fontFamily: 'LogoFont', width: '15%', fontSize: '20px' }}>{nav}</Button>
                ))}
            </Toolbar>
        </AppBar>
        // </Box>
    )
}