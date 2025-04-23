import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

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
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default ContactUs;