import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function RnD() {
    return (
        <Container sx={{ padding: '4rem 2rem' }}>
            <Typography variant="h3" gutterBottom>
                Research & Development
            </Typography>
            <Typography variant="body1" paragraph>
                At GreenLens, innovation is at the heart of everything we do. Our R&D team is constantly exploring new ways to leverage technology to solve environmental challenges.
            </Typography>
            <Typography variant="body1" paragraph>
                From advanced machine learning algorithms to real-time data analysis, we are pushing the boundaries of what's possible in environmental monitoring and management.
            </Typography>
            <Typography variant="body1" paragraph>
                Our ongoing projects include:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1">Developing AI models for invasive species detection.</Typography>
                </li>
                <li>
                    <Typography variant="body1">Creating predictive analytics for ecosystem health.</Typography>
                </li>
                <li>
                    <Typography variant="body1">Building scalable solutions for large-scale environmental monitoring.</Typography>
                </li>
            </ul>
        </Container>
    );
}

export default RnD;