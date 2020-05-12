import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { updateUserProfileDocument } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import UploadFile from '../../components/UploadFile';

import BackButton from '../BackButton';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import isValidDate from '../../helpers/functions/validDate';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';
import graywaves from '../../assets/icons/graywaves.svg';

import { StyledContainer } from './style';

const SignUpWithGoogle = () => {
  const { user } = useContext(AuthenticationContext);
  const history = useHistory();
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msg, setMsg] = useState('');
  const [msglvl, setMsglvl] = useState('');
  const [toogle, setToogle] = useState(false);

  const [inputs, setInputs] = useState({
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: ''
  });

  const onSubmit = async event => {
    event.preventDefault();

    if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    }
    if (inputs.lvlOfSwedish.length <= 1) {
      setMsglvl('Klicka i någon av alternativen');
    }
    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    } else {
      try {
        updateUserProfileDocument(user.id, {
          dateOfBirth: makeStringtoBirthDate(inputs.dateOfBirth),
          lvlOfSwedish: inputs.lvlOfSwedish,
          gender: inputs.gender
        });

        history.push('/feed');
      } catch (error) {
        setMsg('Fyll i fälten och försök igen');
        console.log('Error while sign up', error.message);
      }
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
      <div className="headcontainer">
        <BackButton />
        <H1>Skapa konto</H1>
      </div>
      <img src={graywaves} className="waves" alt="wave" />
      <form onSubmit={onSubmit}>
        <p className="moreinfo">Vi behöver ytterligare information innan ditt konto är klart.</p>
        <div className="signup-form-container">
          {inputs.dateOfBirth.length !== 8 ? (
            <div className="reddott" />
          ) : (
            <div className="donedott" />
          )}
          <Input
            type="text"
            autoComplete="bday"
            label="Födelsedatum *"
            id="dateOfBirth"
            inline
            name="dateOfBirth"
            placeholder="ÅÅÅÅMMDD"
            value={inputs.dateOfBirth}
            onChange={event => onValueChange('dateOfBirth', event.target.value)}
          />
          <div className="redline nr1" />
          <p className="red">{msgBirth}</p>
          {inputs.lvlOfSwedish.length <= 1 ? (
            <div className="reddott nr2" />
          ) : (
            <div className="donedott nr2" />
          )}
          <div className="swedish">
            <p>Hur är din svenskanivå? *</p>
            <label htmlFor="newSwede">
              <input
                type="radio"
                id="newSwede"
                name="swedelvl"
                value="Jag vill lära mig mer svenska"
                onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
              />
              Jag vill lära mig mer svenska
            </label>
            <br />
            <label htmlFor="establish">
              <input
                type="radio"
                id="establish"
                name="swedelvl"
                value="Jag pratar flytande svenska"
                onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
              />
              Jag pratar flytande svenska{' '}
            </label>
          </div>
          <div className="redline nr2" />
          <p className="red">{msglvl}</p>

          {inputs.gender.length <= 0 ? (
            <div className="reddott nr3" />
          ) : (
            <div className="donedott nr3" />
          )}

          <div className="gender">
            <p>Kön? *</p>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={event => onValueChange('gender', event.target.value)}
              />
              Kvinna
            </label>
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={event => onValueChange('gender', event.target.value)}
              />
              Man
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={event => onValueChange('gender', event.target.value)}
              />
              Vill inte ange
            </label>
          </div>
          <div className="redline nr3" />
          <p className="red">{msgGender}</p>
          {inputs.gender.length <= 0 ? <div className="reddott" /> : <div className="donedott" />}
          <div className="profilebox-1">
            <img className="avatar" src={user.photoUrl} alt="avatar" />
            <span
              className="changepic"
              tabIndex="-5"
              role="button"
              aria-label="toogle"
              onClick={() => {
                setToogle(!toogle);
              }}
              onKeyDown={() => {
                setToogle(!toogle);
              }}
            >
              {toogle ? 'Klicka här efter laddat upp din nya bild' : 'Byt bild'}
            </span>
          </div>
          <div className="redline nr3" />
          <p className="red"> {msg} </p>
          {inputs.gender.length <= 0 ? <div className="reddott" /> : <div className="donedott" />}
          <p>Jag godkänner allmänna villkoren</p>
          <div />
          <p>* Obligatoriska fält</p>
        </div>
        {toogle ? null : (
          <div className="buttondiv">
            <Button nature="default" className="nextbutton" stretch type="submit">
              Skapa konto
            </Button>
          </div>
        )}
      </form>

      {toogle ? <UploadFile /> : null}
    </StyledContainer>
  );
};

export default SignUpWithGoogle;
