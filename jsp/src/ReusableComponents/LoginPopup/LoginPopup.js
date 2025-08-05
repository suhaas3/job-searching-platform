import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, TextField,
  Button, Divider, Typography, Link, Box
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPopup = ({ open, loginOpen, setLoginOpen }) => {

const handleClose = () => {
  setLoginOpen(prev => !prev)
}

  return (
    <Dialog open={loginOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h5" align="center">Login</Typography>
        <Typography variant="body2" align="center">
          Don’t have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LinkedInIcon />}
            sx={{ backgroundColor: '#0077B5', textTransform: 'none' }}
          >
            Sign in with LinkedIn
          </Button>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ textTransform: 'none' }}
          >
            Sign in with Google
          </Button>

          <Divider>OR</Divider>

          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />

          <Button onClick={handleClose} variant="contained" color="success" fullWidth>
            Login
          </Button>

          <Typography variant="body2" align="center">
            <Link href="#">Forgot password?</Link>
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="#">Sign in with SSO</Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
