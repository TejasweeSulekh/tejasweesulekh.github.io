import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import DownloadIcon from '@mui/icons-material/Download';
import FadeInView from './FadeInView';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: '' });
  const [canSubmit, setCanSubmit] = useState(true);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  useEffect(() => {
    const lastSubmission = localStorage.getItem('lastSubmissionTime');
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission, 10);
      if (timePassed < 24 * 60 * 60 * 1000) {
        setCanSubmit(false);
      } else {
        localStorage.removeItem('lastSubmissionTime');
      }
    }
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onCaptchaChange = (token) => setCaptchaToken(token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) {
      setStatus({ submitting: false, success: false, error: true, message: "You can only send one message per day." });
      return;
    }
    if (!captchaToken) {
      setStatus({ submitting: false, success: false, error: true, message: "Please complete the captcha." });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: '' });

    const object = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      "h-captcha-response": captchaToken
    };
    
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: false, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        localStorage.setItem('lastSubmissionTime', Date.now().toString());
        setCanSubmit(false); 
        if (captchaRef.current) captchaRef.current.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus({ submitting: false, success: false, error: true, message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true, message: 'Network error. Please try again.' });
    }
  };

  const handleCloseSnackbar = () => setStatus({ ...status, success: false, error: false });

  return (
    <Container component="section" id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Contact Me
      </Typography>
      
      <FadeInView delay={0.2}>
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px', mx: 'auto', p: 3, borderRadius: 2, boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)' }}
        >
          <TextField label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" required disabled={status.submitting || !canSubmit} />
          <TextField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" required disabled={status.submitting || !canSubmit} />
          <TextField label="Your Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} required disabled={status.submitting || !canSubmit} />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
            <HCaptcha sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" onVerify={onCaptchaChange} ref={captchaRef} />
          </Box>

          <Button variant="contained" type="submit" fullWidth disabled={status.submitting || !canSubmit} sx={{ transition: 'transform 0.2s', '&:hover': { transform: !canSubmit ? 'none' : 'scale(1.02)' } }}>
            {!canSubmit ? 'Daily Limit Reached' : status.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </FadeInView>

      <FadeInView delay={0.4}>
        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Prefer to just grab my resume?
          </Typography>
          <Button 
            variant="outlined" 
            href="/Tejaswee_Sulekh_Resume.pdf" 
            download="Tejaswee_Sulekh_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{ 
              mt: 1, 
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.3)', 
              borderRadius: '30px', 
              padding: '10px 28px',
              textTransform: 'none', 
              fontSize: '1.1rem',
              backdropFilter: 'blur(10px)', 
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: '0 0 20px rgba(144, 202, 249, 0.4)', 
                transform: 'translateY(-3px)',
                backgroundColor: 'rgba(144, 202, 249, 0.05)' 
              }
            }}
          >
            Download Resume
          </Button>
        </Box>
      </FadeInView>

      <Snackbar open={status.success || status.error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={status.success ? "success" : "error"} sx={{ width: '100%' }}>
          {status.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;