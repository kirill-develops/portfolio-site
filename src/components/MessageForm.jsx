import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import Recaptcha from 'react-recaptcha';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { IoMailOutline } from 'react-icons/io5';
import { Section, Title } from '../styles/globalStyles';
import media from '../styles/mediaQueries';
import useBreakpoint from '../utils/useBreakpoint';

const MessageSection = styled(Section)`
  height: fit-content;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 1.5rem auto 0;

  ${media.tabletPortrait`
    max-width: 50%;
    min-width: 300px;
  `}
  ${media.mobileLandscape`
    width: 50%;
    min-width: 300px;
    max-width: 375px;
  `}
`;

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

  const handleValidation = useCallback(() => {
    let fields = formValues;
    let errors = {};
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
            },
            (err) => {
              console.log('FAILED...', err);
            },
          );

        resetForm();
      }
    },
    [formValues],
  );

  useEffect(() => {
    if (formValues.hasClicked) handleValidation();
  }, [formValues]);

  const { isMobilePortrait, isMobileLandscape } = useBreakpoint();
  const isMobile = isMobileLandscape || isMobilePortrait;

  return (
    <MessageSection>
      <Title>Leave a Message</Title>
      <Form
        onSubmit={handleSubmit}
        netlify
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
          size={isMobile ? 'small' : 'medium'}
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
          size={isMobile ? 'small' : 'medium'}
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
      </Form>
    </MessageSection>
  );
}

export default MessageForm;
