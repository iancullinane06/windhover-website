import { AppBar, Box, Typography, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

export const FloatingNavbar = styled(AppBar)({
    backgroundColor: '#d3d3d3',
    borderRadius: '16px',
    margin: '1rem auto',
    width: '90vw',
    left: '5vw',
    right: '5vw',
    top: '1rem',
    zIndex: 10,
});

export function LogoWithText() {
    return (
        <Box
            component="a"
            href="/"
            sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
            }}
            >
            <Box
                component="img"
                src="/GreenLens.png"
                alt="GreenLens Logo"
                sx={{ height: '40px', marginRight: '8px' }}
            />
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
                GreenLens
            </Typography>
        </Box>
    );
}

export function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <FloatingNavbar elevation={3}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <LogoWithText />
                <Box>
                    <Button
                        sx={{
                            color: 'black',
                            textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        }}
                        href="/"
                    >
                        Home
                    </Button>
                    <Button
                        sx={{
                            color: 'black',
                            textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        }}
                        href="/products"
                    >
                        Products
                    </Button>
                    <Button
                        sx={{
                            color: 'black',
                            textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        }}
                        href="/pricing"
                    >
                        Pricing
                    </Button>
                    <Button
                        sx={{
                            color: 'black',
                            textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        }}
                        onClick={handleMenuOpen}
                    >
                        About Us
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} component="a" href="#about-us">
                            About Us
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="#rnd">
                            R&D
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="#contact-us">
                            Contact Us
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </FloatingNavbar>
    );
}