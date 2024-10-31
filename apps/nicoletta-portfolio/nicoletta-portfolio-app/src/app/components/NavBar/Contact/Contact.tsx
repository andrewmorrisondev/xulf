import { useState } from "react";
import styled from "styled-components";
import { Button, Input, Box, Typography, Textarea, CircularProgress } from '@mui/joy';
import emailjs from 'emailjs-com';

// Styled component for the contact form container, matching the design of ContentBox
const StyledContactForm = styled(Box)<{ isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  color: white;
  max-height: 30em;
  overflow-y: auto;
  position: relative;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};

  h1, h4, p {
    color: white;
  }
`;

// Spinner overlay container
const SpinnerOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(44, 103, 156, 0.4), rgba(52, 119, 176, 0.4));
  z-index: 10;
`;

// Custom styled Button to match the nav button style
const StyledButton = styled(Button)`
  background: linear-gradient(to bottom, rgba(44, 103, 156, 0.4), rgba(52, 119, 176, 0.4));
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: linear-gradient(to bottom, rgba(44, 103, 156, 0.6), rgba(52, 119, 176, 0.6));
  }
`;

export const ContactInner = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);  // Loading state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newState = { ...prevState, [name]: value };
      return newState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);  // Start the loading animation

    // Error handling for missing env variables
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      console.error("Missing EMAILJS Service ID");
    }
    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      console.error("Missing EMAILJS Template ID");
    }
    if (!process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
      console.error("Missing EMAILJS User ID");
    }
    if (!process.env.NEXT_PUBLIC_EMAILJS_TO) {
      console.error("Missing recipient email");
    }

    // Send the email
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO || '',  // The email you're sending to
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''        // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS! Response Status:', response.status);
        console.log('Response Text:', response.text);
        setLoading(false);  // Stop the loading animation
        setSubmitted(true);  // Show the thank you message
      })
      .catch((err) => {
        console.error('FAILED...', err);  // Use console.error for better error visibility
        if (err.response) {
          console.error('Error response status:', err.response.status);
          console.error('Error response text:', err.response.text);
        }
        setLoading(false);  // Stop the loading animation if failed
      });
  };

  if (submitted) {
    return (
      <Typography level="h4" sx={{ color: 'white' }}>Thank you, your message has been sent!</Typography>
    );
  }

  return (
    <StyledContactForm as="form" onSubmit={handleSubmit} isLoading={loading}>
      {loading && (
        <SpinnerOverlay>
          <CircularProgress color="neutral" size="lg" />
        </SpinnerOverlay>
      )}

      <Typography level="h4" component="h1">
        Contact Nicoletta
      </Typography>
      <Box>
        <Typography>Name</Typography>
        <Input
          placeholder="Enter your name"
          required
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={{
            width: '100%',
            background: '#00000000',
            input: {
              color: 'white',
            },
          }}
        />
      </Box>
      <Box>
        <Typography>Email</Typography>
        <Input
          placeholder="Enter your email"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={{
            width: '100%',
            background: '#00000000',
            input: {
              color: 'white',
            },
          }}
        />
      </Box>
      <Box>
        <Typography>Message</Typography>
        <Textarea
          placeholder="Type your message here..."
          required
          name="message"
          minRows={4}
          value={formData.message}
          onChange={handleInputChange}
          sx={{
            width: '100%',
            background: '#00000000',
            textarea: {
              color: 'white',
            },
          }}
        />
      </Box>
      <StyledButton type="submit" variant="solid" color="primary" size="lg" disabled={loading}>
        Send Message
      </StyledButton>
    </StyledContactForm>
  );
};
