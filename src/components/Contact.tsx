import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === ''
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    emailjs
      .send(
        'service_11oo3db',
        'template_mg6hzef',
        formData,
        'F1JeJNXJKrJZWMI_X'
      )
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email send failed:', err);
      });
  };

  // ------------------------------
  // THEME HANDLING
  // ------------------------------
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply the current theme to the document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Optional: listen for system theme changes if you want automatic sync
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  return (
    <div className="contact-wrapper"id="contact">
      <h1>Contact Me</h1>
      <p>Please feel free to reach out and say Hello!😊</p>
      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className="form-row">
          <TextField
            className="form-field"
            label="Your Name"
            placeholder="What's your name?"
            variant="outlined"
            value={formData.name}
            onChange={handleChange('name')}
            error={errors.name}
            helperText={errors.name ? 'Name is required' : ''}
            fullWidth
          />
          <TextField
            className="form-field"
            label="Email / Phone"
            placeholder="How can I reach you?"
            variant="outlined"
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email}
            helperText={errors.email ? 'Contact info is required' : ''}
            fullWidth
          />
        </div>
        <TextField
          label="Message"
          placeholder="Send me any inquiries or questions"
          multiline
          rows={8}
          variant="outlined"
          value={formData.message}
          onChange={handleChange('message')}
          error={errors.message}
          helperText={errors.message ? 'Message is required' : ''}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </div>
  );
}

export default Contact;
