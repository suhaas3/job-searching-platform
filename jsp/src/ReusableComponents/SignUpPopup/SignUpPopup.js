import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, Box, Button,
  Divider, TextField, Typography, Link, Checkbox, FormControlLabel
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const testimonials = [
  {
    quote: "Instahyre really stands out from a typical job site by showing relevant positions at top companies!",
    name: "Deepak Kumar",
    position: "Hired at Amazon",
    img: "https://static.instahyre.com/images/candidates/deepak.webp"
  },
  {
    quote: "It was a really cool experience with Instahyre. Very simple without the bugging from irrelevant jobs.",
    name: "Tushar Garg",
    position: "Hired at Paytm",
    img: "https://static.instahyre.com/images/candidates/tushar.webp"
  }
];

const SignUpPopup = ({ open, signupOpen, setSignupOpen }) => {

  const handleClose = () => {
    setSignupOpen(prev => !prev);
  }

  return (
    <Dialog open={signupOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>

          {/* Left Side: Testimonials */}
          <Box flex={1} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography variant="h6" gutterBottom>
              Top companies. Full privacy. No spam.
            </Typography>
            {testimonials.map((item, index) => (
              <Box key={index} my={3}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: 2,
                    borderRadius: 1,
                    fontStyle: "italic"
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">{item.name}</Typography>
                    <Typography variant="caption">{item.position}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right Side: Sign Up Form */}
          <Box flex={1} p={2}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{ backgroundColor: '#0077B5', textTransform: 'none', mb: 1 }}
            >
              Sign in with LinkedIn
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ textTransform: 'none', mb: 2 }}
            >
              Sign in with Google
            </Button>

            <Divider sx={{ mb: 2 }}>OR</Divider>

            <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography variant="body2">
                  I agree to the&nbsp;
                  <Link href="#">Terms of Service</Link> and&nbsp;
                  <Link href="#">Privacy Policy</Link>.
                </Typography>
              }
              sx={{ alignItems: 'flex-start', mt: 1 }}
            />

            <Button 
              onClick={handleClose}
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2, textTransform: 'none', fontWeight: 'bold' }}
            >
              Get Started »
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account? <Link href="#">Log in here</Link>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpPopup;
