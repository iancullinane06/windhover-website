import { AppBar, Box, Typography, Toolbar, Button, MenuItem, Paper } from '@mui/material';
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

const FrostedMenu = styled(Paper)({
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '0.5rem 0',
    minWidth: '150px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
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
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            '&:hover .dropdown-menu': {
                                display: 'block',
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: 'black',
                                textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            About Us
                        </Button>
                        <FrostedMenu
                            className="dropdown-menu"
                            sx={{
                                display: 'none',
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                zIndex: 20,
                            }}
                        >
                            <MenuItem component="a" href="/about-us">
                                About Us
                            </MenuItem>
                            <MenuItem component="a" href="/rnd">
                                R&D
                            </MenuItem>
                            <MenuItem component="a" href="/contact-us">
                                Contact Us
                            </MenuItem>
                        </FrostedMenu>
                    </Box>
                </Box>
            </Toolbar>
        </FloatingNavbar>
    );
}