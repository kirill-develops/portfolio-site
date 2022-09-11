import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Section, Title } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

const MessageSection = styled(Section)`
  height: fit-content;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 1.5rem auto 0;

  ${media.tabletPortrait`
    max-width: 50%;
  `}
  ${media.tabletLandscape`
    width: 50%;
    max-width: 375px;
  `}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 0.9rem;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.2;
  overflow: visible;
  outline: none;
  border: none;
  border-bottom: 1px solid ${colors.black};

  &::placeholder {
    color: ${colors.darkAccent};
  }
`;

const ErrorMsg = styled.p`
  color: red;
  margin-top: 0.5rem;
  padding-left: 8px;
`;

const SubmitButton = styled.button`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  font-size: 1.3rem;
  line-height: 1.2;
  margin: 1rem auto 0;
  width: 100%;
  border-radius: 4px;
`;

function MessageForm() {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    hasClicked: false,
  });

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

      if (isFormValid) {
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

  return (
    <MessageSection>
      <Title>Leave a Message</Title>
      <Form
        onSubmit={handleSubmit}
        netlify
      >
        <Input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="NAME"
          autoComplete="off"
        />
        {errors?.name && <ErrorMsg>Name {errors?.name}</ErrorMsg>}
        <Input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="EMAIL"
        />
        {errors?.email && <ErrorMsg>Email {errors?.email}</ErrorMsg>}
        <Input
          onChange={handleChange}
          value={formValues.message}
          as="textarea"
          name="message"
          placeholder="MESSAGE"
        />
        {errors?.message && <ErrorMsg>Message {errors?.message}</ErrorMsg>}
        <SubmitButton type="submit">SEND</SubmitButton>
      </Form>
    </MessageSection>
  );
}

export default MessageForm;
