import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

function ContactUs() {
    return (
        <Container sx={{ padding: '4rem 2rem' }}>
            <Typography variant="h3" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                Have questions or need assistance? We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                <TextField label="Name" variant="outlined" fullWidth required />
                <TextField label="Email" variant="outlined" fullWidth required />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default ContactUs;