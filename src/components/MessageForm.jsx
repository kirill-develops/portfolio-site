import React, { useState, useEffect, useCallback, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import Recaptcha from 'react-recaptcha';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { IoCloseOutline, IoMailOutline } from 'react-icons/io5';
import { Section, Title } from '../styles/globalStyles';
import colors from '../styles/colors';
import useBreakpoint from '../utils/useBreakpoint';

const MessageSection = styled(Section)`
  height: fit-content;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`;

const formStyle = {
  p: 5,
  maxWidth: 'fit-content',
  mx: 'auto',
  mt: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
};

function SlideTransition(props = SlideProps) {
  return (
    <Slide
      {...props}
      direction="up"
    />
  );
}

function MessageForm() {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    hasClicked: false,
  });

  const [isRecaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);
  const recaptchaLoaded = useCallback(() => setRecaptchaLoaded(true), []);
  const recaptchaVerified = useCallback(() => setRecaptchaVerified(true), []);
  const recaptchaReset = useCallback(() => {
    setRecaptchaLoaded(false);
    setRecaptchaVerified(false);
  }, []);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState({
    message: 'Message successfully sent!',
    severity: 'success',
  });
  const handleClose = useCallback(() => setSnackbarOpen(false), []);
  const snackbarAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <IoCloseOutline />
    </IconButton>
  );

  const handleValidation = useCallback(() => {
    const fields = formValues;
    const errors = {};
    let formIsValid = true;

    //Name
    if (!fields.name) {
      formIsValid = false;
      errors.name = 'cannot be empty';
    }

    if (fields.name) {
      if (!fields.name?.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.name = 'must be only letters';
      }
    }

    //Email
    if (!fields.email) {
      formIsValid = false;
      errors.email = 'cannot be empty';
    }

    if (fields.email) {
      let lastAtPos = fields.email.lastIndexOf('@');
      let lastDotPos = fields.email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields.email.indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          fields.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors.email = 'is not valid';
      }
    }

    // Message
    if (!fields.message) {
      formIsValid = false;
      errors.message = 'cannot be empty';
    }

    setErrors(errors);

    return formIsValid;
  }, [formValues]);

  const resetForm = useCallback(() => {
    setFormValues({
      name: '',
      email: '',
      message: '',
      hasClicked: false,
    });
    setErrors({});
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isFormValid = handleValidation();

      if (!isFormValid && !formValues.hasClicked) {
        setFormValues({
          ...formValues,
          hasClicked: true,
        });
      }

      if (
        isFormValid &&
        recaptchaValues.isLoaded &&
        recaptchaValues.isVerified
      ) {
        const templateParams = {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
          to_name: 'Kirill Tchentsov',
        };

        emailjs
          .send(
            process.env.GATSBY_EMAILJS_SERVICE_ID,
            process.env.GATSBY_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.GATSBY_EMAILJS_PUBLIC_KEY,
          )
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setSnackbarProps({
                message: 'Message Successfully sent!',
                severity: 'success',
              });
              setSnackbarOpen(true);
              resetForm();
            },
            (err) => {
              console.log('FAILED...', err);
              setSnackbarProps({
                message: 'Error: Please try resending your Message',
                severity: 'error',
              });
              setSnackbarOpen(true);
            },
          );
      }
    },
    [formValues],
  );

  useEffect(() => {
    if (formValues.hasClicked) handleValidation();
  }, [formValues]);

  const { isMobilePortrait, isMobileLandscape } = useBreakpoint();
  const isMobile = useMemo(
    () => isMobilePortrait || isMobileLandscape,
    [isMobileLandscape, isMobilePortrait],
  );

  return (
    <MessageSection>
      <Title color={colors.mainColor}>Leave a Message</Title>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        netlify
        elevation={5}
        sx={formStyle}
      >
        <TextField
          id="outlined-basic"
          label="NAME"
          name="name"
          variant="outlined"
          error={Boolean(errors?.name)}
          helperText={errors?.name && `Name ${errors?.name}`}
          onChange={handleChange}
          value={formValues.name}
          size="small"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="EMAIL"
          name="email"
          variant="outlined"
          error={Boolean(errors?.email)}
          helperText={errors?.email && `Email ${errors?.email}`}
          onChange={handleChange}
          value={formValues.email}
          size="small"
          fullWidth
        />
        <TextField
          id="outlined-textarea-static"
          label="MESSAGE"
          name="message"
          variant="outlined"
          error={Boolean(errors?.message)}
          helperText={errors?.message && `Message ${errors?.message}`}
          multiline
          rows={4}
          onChange={handleChange}
          value={formValues.message}
          fullWidth
        />
        <Recaptcha
          sitekey={process.env.GATSBY_GOOGLE_CAPTCHA_SITEKEY}
          render="explicit"
          size={isMobile ? 'compact' : 'normal'}
          onloadCallback={recaptchaLoaded}
          verifyCallback={recaptchaVerified}
          expiredCallback={recaptchaReset}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={!isRecaptchaLoaded || !isRecaptchaVerified}
          endIcon={<IoMailOutline />}
          size="large"
          fullWidth
        >
          SEND
        </Button>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        action={snackbarAction}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarProps.severity}
          sx={{ width: '100%' }}
        >
          {snackbarProps.message}
        </Alert>
      </Snackbar>
    </MessageSection>
  );
}

export default MessageForm;
