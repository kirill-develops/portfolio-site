import React, { useState } from 'react';
import { useCallback } from 'react';
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
  const [formValues, setFormValues] = useState({
    name: null,
    email: null,
    message: null,
    errors: {},
  });

  const handleValidation = useCallback(() => {
    let fields = formValues;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields.name) {
      formIsValid = false;
      errors.name = 'Cannot be empty';
    }

    if (fields.name) {
      if (!fields.name?.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.name = 'Only letters';
      }
    }

    //Email
    if (!fields.email) {
      formIsValid = false;
      errors.email = 'Cannot be empty';
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
        errors.email = 'Email is not valid';
      }
    }

    // Message
    if (!fields.message) {
      formIsValid = false;
      errors.message = 'Cannot be empty';
    }

    setFormValues({
      ...formValues,
      errors,
    });

    return formIsValid;
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = handleValidation();

    console.log(isFormValid);
  };

  return (
    <MessageSection>
      <Title>Leave a Message</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="NAME"
          autoComplete="off"
          required
        />
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="EMAIL"
          required
        />
        <Input
          onChange={handleChange}
          as="textarea"
          name="message"
          placeholder="MESSAGE"
          required
        />
        <SubmitButton type="submit">SEND</SubmitButton>
      </Form>
    </MessageSection>
  );
}

export default MessageForm;
