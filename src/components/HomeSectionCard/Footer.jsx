import React from 'react';
import { Grid, Typography, Box, TextField, Button, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
  
    <Box  sx={{ bgcolor: 'black', color: 'white', px: 4, py: 6 }}>
      <Grid container spacing={5}>

        
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Company</Typography>
          <Link href="#" underline="hover" color="inherit" display="block">About Us</Link>
          <Link href="#" underline="hover" color="inherit" display="block">Careers</Link>
          <Link href="#" underline="hover" color="inherit" display="block">Blog</Link>
        </Grid>

   
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Support</Typography>
          <Link href="#" underline="hover" color="inherit" display="block">Contact Us</Link>
          <Link href="#" underline="hover" color="inherit" display="block">FAQs</Link>
          <Link href="#" underline="hover" color="inherit" display="block">Shipping & Returns</Link>
        </Grid>

        
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Legal</Typography>
          <Link href="#" underline="hover" color="inherit" display="block">Privacy Policy</Link>
          <Link href="#" underline="hover" color="inherit" display="block">Terms of Service</Link>
          <Link href="#" underline="hover" color="inherit" display="block">Accessibility</Link>
        </Grid>

        
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Subscribe</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Get exclusive offers & updates
          </Typography>
          <Box component="form" sx={{ display: 'flex', gap: 1 }}>
            <TextField
              placeholder="Email Address"
              variant="filled"
              size="small"
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                flex: 1,
              }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <IconButton href="#" color="inherit"><Facebook /></IconButton>
            <IconButton href="#" color="inherit"><Twitter /></IconButton>
            <IconButton href="#" color="inherit"><Instagram /></IconButton>
            <IconButton href="#" color="inherit"><LinkedIn /></IconButton>
          </Box>
        </Grid>
      </Grid>

      
      <Box textAlign="center" mt={5}>
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </Typography>
      </Box>
    </Box>
   
  );
};

export default Footer;
