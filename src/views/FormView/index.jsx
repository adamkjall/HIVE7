import React, { useState } from 'react';

import Page from 'compositions/Page';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';
import Select from 'components/UI/Select';

import colors from 'tokens/colors.mjs';

import { StyledPre } from './style';

const FormView = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: 'hello@humblebee.se',
    password: '',
    comment: '',
    decisiveChoice: 'Red pill'
  });

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    setIsFormSubmitted(true);

    // You probably wish to implement some actions with the form values here :)
    console.info(inputs); /* eslint-disable-line no-console */
  };

  return (
    <Page metadata={{ title: 'Form example' }}>
      <H1>Form example</H1>
      <form name="example-form" onSubmit={onSubmit}>
        <Input
          type="text"
          label="First name"
          id="firstName"
          inline
          name="firstName"
          placeholder="First Name"
          value={inputs.firstName}
          onChange={event => onValueChange('firstName', event.target.value)}
        />
        <Input
          type="text"
          label="Last name"
          id="lastName"
          inline
          name="lastName"
          placeholder="Last Name"
          value={inputs.lastName}
          onChange={event => onValueChange('lastName', event.target.value)}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={inputs.email}
          autoComplete="username"
          onChange={event => onValueChange('email', event.target.value)}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          placeholder="keep this secret!"
          required
          value={inputs.password}
          autoComplete="new-password"
          onChange={event => onValueChange('password', event.target.value)}
        />
        <Textarea
          label="Some comment?"
          id="comment"
          name="comment"
          value={inputs.comment}
          onChange={event => onValueChange('comment', event.target.value)}
        />
        <Select
          label="Are you ready to enter the rabbit hole, Neo?"
          id="decisiveChoice"
          name="decisiveChoice"
          value={inputs.decisiveChoice}
          onChange={event => onValueChange('decisiveChoice', event.target.value)}
          style={{
            color:
              inputs.decisiveChoice === 'Red pill'
                ? colors.red
                : inputs.decisiveChoice === 'Blue pill'
                ? colors.blue
                : undefined
          }}
        >
          <option value="Red pill" style={{ color: colors.red }}>
            Take the red pill - Remember, all I offer is truth, nothing more!
          </option>
          <option value="Blue pill" style={{ color: colors.blue }}>
            Take the blue pill - Forget about everything, sweet dreams forever...
          </option>
          <option value="Green pill" disabled>
            There is no such thing as a green pill, WTF?!
          </option>
        </Select>
        <Button nature="primary" stretch type="submit">
          Submit
        </Button>
      </form>
      <StyledPre submitted={isFormSubmitted}>
        {JSON.stringify(
          {
            submitted: isFormSubmitted,
            inputs
          },
          null,
          2
        )}
      </StyledPre>
    </Page>
  );
};

export default FormView;
