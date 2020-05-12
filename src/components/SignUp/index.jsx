import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { storage, auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import BackButton from '../BackButton';
import isValidDate from '../../helpers/functions/validDate';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';
import graywaves from '../../assets/icons/graywaves.svg';
import chooseprofilepic from '../../assets/icons/chooseprofilepic.svg';
import { StyledContainer } from './style';

const SignUp = () => {
  const history = useHistory();
  const [nextquestionens, setNextQuestions] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgMail, setmsgMail] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msglvl, setMsglvl] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');

  const onFileChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const validateEmail = () => {
    console.log('validateemail function to server, before submit!');
  };

  const handleValidateBirthday = () => {
    if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    } else return;
  };

  const onNext = async event => {
    event.preventDefault();
    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    } else if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    } else if (inputs.email.length <= 4) {
      setmsgMail('Fyll i din epost-adress');
    } else if (inputs.password.length < 6) {
      setPasswordMsg('Ditt Lösenord behöver vara minst 6 tecken.');
    } else if (inputs.password !== inputs.confirmPassword) {
      setConfirmPasswordMsg('Dina lösenord matchar inte');
    } else {
      setMsgName(''), setMsgBirth(''), setmsgMail(''), setMsg(''), setNextQuestions(true);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    }
    if (inputs.lvlOfSwedish < 1) {
      setMsglvl('Var vänlig klicka i ett alternativ');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      await createUserProfileDocument(user, {
        displayName: inputs.username,
        dateOfBirth: makeStringtoBirthDate(inputs.dateOfBirth),
        lvlOfSwedish: inputs.lvlOfSwedish,
        gender: inputs.gender
      });

      const uploadTask = await storage.ref(`profile-pictures/${user.id}`).put(file); // set unique path

      await uploadTask.on(
        'state_changed',
        snapshot => {
          //progress function
        },
        error => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            createUserProfileDocument(user.id, { photoUrl: downloadURL });
          });
        }
      );
      history.push('/feed');
    } catch (error) {
      setMsg('Något gick fel. Fyll i fälten och försök igen');
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
      <div className="headcontainer">
        <BackButton />
        <H1>Skapa konto</H1>
      </div>
      <img src={graywaves} className="waves" alt="wave" />
      <form onSubmit={onSubmit}>
        {!nextquestionens ? (
          <div>
            <H1 className="h1-in-center">1/2</H1>
            <div className="signup-form-container">
              {inputs.username.length <= 1 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="name"
                autoComplete="name"
                label="Förnamn och efternamn *"
                id="name"
                inline
                name="username"
                placeholder="Namn Efternamn"
                value={inputs.username}
                onChange={event => onValueChange('username', event.target.value)}
              />

              <div className="redline" />
              <p className="red">{msgName}</p>
              {inputs.email.length <= 4 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="email"
                autoComplete="email"
                label="E-Post *"
                id="email"
                inline
                name="email"
                placeholder="namn.efternamn@gmail.com"
                value={inputs.email}
                onBlur={event => validateEmail('email', event.target.value)}
                onChange={event => onValueChange('email', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{msgMail}</p>
              {inputs.dateOfBirth.length !== 8 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="number"
                autoComplete="bday"
                label="Födelsedatum *"
                id="dateOfBirth"
                inline
                name="dateOfBirth"
                placeholder="ÅÅÅÅMMDD"
                value={inputs.dateOfBirth}
                onBlur={event => handleValidateBirthday('dateOfBirth', event.target.value)}
                onChange={event => onValueChange('dateOfBirth', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{msgBirth}</p>
              {inputs.password.length <= 5 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="password"
                autoComplete="current-password"
                label="Lösenord*"
                id="password"
                inline
                name="password"
                placeholder="********"
                value={inputs.password}
                onChange={event => onValueChange('password', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{passwordMsg}</p>
              {inputs.confirmPassword.length <= 5 || inputs.password !== inputs.confirmPassword ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="password"
                autoComplete="current-password"
                label="Lösenordet igen*"
                id="confirmPassword"
                inline
                name="confirmPassword"
                placeholder="********"
                value={inputs.confirmPassword}
                onChange={event => onValueChange('confirmPassword', event.target.value)}
              />
              <p className="red">{confirmPasswordMsg}</p>
              <p>* Obligatoriska fält</p>
              <div />
            </div>
            <div className="buttondiv">
              <Button className="nextbutton" stretch onClick={onNext}>
                Nästa
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <H1 className="h1-in-center">2/2</H1>
            <div className="signup-form-container2">
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
                  Jag pratar flytande svenska
                </label>
              </div>
              <div className="redline2" />
              <p className="redlvl">{msglvl}</p>
              {inputs.gender.length <= 0 ? (
                <div className="reddott nr2" />
              ) : (
                <div className="donedott nr2" />
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
                <br />
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
                <br />
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
              <div className="redline2" />
              <p className="red">{msgGender}</p>
              {filename.length == 0 ? <div className="reddott" /> : <div className="donedott" />}
              {/* funkar inte då man inte har ett id förren skapa knappen. */}
              <div className="uploadfile-wrapper">
                <input type="file" id="file" onChange={onFileChange} size="10000000" />
                <label className="file-upload" htmlFor="file">
                  Byt profilbild *
                  {filename.length > 0 ? (
                    <img src={chooseprofilepic} alt="chooseprofilepic" />
                  ) : (
                    <img src={chooseprofilepic} alt="chooseprofilepic" />
                  )}
                </label>
              </div>
              <div />
            </div>
            <p className="red the-bottom-line">{msg}</p>
            <div />
            <div className="buttondiv">
              <Button className="nextbutton" nature="default" stretch type="submit">
                Skapa konto
              </Button>
            </div>
          </div>
        )}
      </form>
    </StyledContainer>
  );
};

export default SignUp;
