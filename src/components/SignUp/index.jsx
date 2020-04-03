import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Button from '../UI/Button';
import H3 from '../UI/H3';
import Input from '../UI/Input';
import Select from '../UI/Select';

import { StyledContainer } from './style';

const SignUp = () => {
  const history = useHistory();
  const [msgName, setMsgName] = useState('');
  const [msgLvl, setMsglvl] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msg, setMsg] = useState('');

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    password: '',
    confirmPassword: ''
  });

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    }
    if (inputs.dateOfBirth.length != 8 || inputs.dateOfBirth > 20200202) {
      setMsgBirth('Fyll i det datum du är född.');
    }
    if (inputs.lvlOfSwedish.length < 4) {
      setMsglvl('Var vänlig fyll i Svenska nivå.');
    }
    if (inputs.password !== inputs.confirmPassword) {
      setMsg('Dina lösenord matchar inte');
      return;
    }
    if (inputs.password.length < 6) {
      setMsg('Ditt Lösenord behöver vara minst 6 tecken.');
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      await createUserProfileDocument(user, {
        displayName: inputs.username,
        dateOfBirth: inputs.dateOfBirth,
        lvlOfSwedish: inputs.lvlOfSwedish
      });

      history.push('/feed');
    } catch (error) {
      console.log('Error while sign up', error.message);
    }
  };

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  return (
    <StyledContainer>
      <form onSubmit={onSubmit}>
        <H3>Skapa konto</H3>
        <Input
          type="text"
          autoComplete="username"
          label="Namn"
          id="username"
          inline
          name="username"
          placeholder="Namn Efternamn"
          value={inputs.username}
          onChange={event => onValueChange('username', event.target.value)}
        />
        <p className="red">{msgName}</p>
        <Input
          type="email"
          autoComplete="email"
          label="E-Post"
          id="email"
          inline
          name="email"
          placeholder="namn.efternamn@gmail.com"
          value={inputs.email}
          onChange={event => onValueChange('email', event.target.value)}
        />
        <Input
          type="number"
          autoComplete="dateOfBirth"
          label="Födelsedatum"
          id="dateOfBirth"
          inline
          name="dateOfBirth"
          placeholder="ÅÅÅÅMMDD"
          value={inputs.dateOfBirth}
          onChange={event => onValueChange('dateOfBirth', event.target.value)}
        />
        <p className="red">{msgBirth}</p>
        <Select
          id="lvlOfSwedish"
          name="lvlOfSwedish"
          label="Svenska nivå"
          value={inputs.lvlOfSwedish}
          onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
        >
          <option value="no"></option>
          <option value="Pratar ingen svenska">Pratar ingen svenska</option>
          <option value="Pratar lite svenska">Pratar lite svenska</option>
          <option value="Pratar bra svenska">Pratar bra svenska</option>
          <option value="Pratar flytande svenska">Pratar flytande svenska</option>
        </Select>
        <p className="red">{msgLvl}</p>
        <Input
          type="password"
          autoComplete="current-password"
          label="Lösenord"
          id="password"
          inline
          name="password"
          placeholder="********"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <Input
          type="password"
          autoComplete="current-password"
          label="Lösenord igen"
          id="confirmPassword"
          inline
          name="confirmPassword"
          placeholder="********"
          value={inputs.confirmPassword}
          onChange={event => onValueChange('confirmPassword', event.target.value)}
        />
        <p className="red">{msg}</p>
        <Button nature="default" type="submit">
          Skapa konto
        </Button>
      </form>
    </StyledContainer>
  );
};

export default SignUp;
