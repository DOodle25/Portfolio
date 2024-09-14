import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import { styled } from '@mui/system';
// import axios from 'axios'; // For making HTTP requests

const FooterContainer = styled('footer')({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '2rem 0',
  textAlign: 'center',
});

const SocialIcons = styled(Box)({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
});

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For showing success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to backend API to send email
      const response = await axios.post('/api/send-email', { email, message });

      // Show success message
      setStatus('Email sent successfully!');
      setEmail(''); // Clear form fields
      setMessage('');
    } catch (error) {
      // Show error message
      setStatus('Error sending email. Please try again later.');
    }
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Info Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">123 Main St, Anytown, USA</Typography>
            <Typography variant="body2">Phone: +1 (555) 123-4567</Typography>
            <Typography variant="body2">Email: info@yourcompany.com</Typography>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover">Home</Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">Services</Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">About Us</Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Send Email Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Send Us an Email
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                label="Your Email Address"
                variant="filled"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px' } }}
                required
              />
              <TextField
                label="Message"
                variant="filled"
                size="small"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', marginTop: '10px' } }}
                required
              />
              <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }} fullWidth>
                Send Message
              </Button>
              {status && <Typography variant="body2" sx={{ mt: 2 }}>{status}</Typography>}
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Links */}
        <SocialIcons>
          <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" color="inherit">
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank" color="inherit">
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" color="inherit">
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton aria-label="GitHub" href="https://github.com" target="_blank" color="inherit">
            <GitHub fontSize="large" />
          </IconButton>
        </SocialIcons>

        <Typography variant="body2" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
