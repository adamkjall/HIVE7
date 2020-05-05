import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { createWalkDocument } from '../../firebase/firebase.utils';

import H1 from 'components/UI/H1';
import BackButton from 'components/BackButton';
import Select from 'components/UI/Select';
import Button from 'components/UI/Button';
import CheckBox from '../../components/UI/Checkbox';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';
import chat from '../../assets/icons/chat.svg';
import family from '../../assets/icons/family.svg';
import friends from '../../assets/icons/friends.svg';
import location from '../../assets/icons/location.svg';
import pets from '../../assets/icons/pets.svg';
import bringPetsvg from '../../assets/icons/bringPets.svg';
import walking from '../../assets/icons/walking.svg';
import time from '../../assets/icons/time.svg';
import calender from '../../assets/icons/calender.svg';
import waves from '../../assets/icons/waves.svg';
import gendericon from '../../assets/icons/gender-icon.svg';
import graywaves from '../../assets/icons/graywaves.svg';

import { StyledPostForm } from './style';
const PostForm = () => {
  const { user } = useContext(AuthenticationContext);
  const history = useHistory();
  const [msg, setMsg] = useState('');
  const [wheremsg, setWhereMsg] = useState('');

  const [toogleWhen, setToogleWhen] = useState(false);
  const [toogleWhere, setToogleWhere] = useState(false);
  const [toogleDuration, setToogleDuration] = useState(false);

  const [inputs, setInputs] = useState({
    date: '',
    time: '',
    where: '',
    timeduration: '',
    allowFriends: 'false',
    allowChildren: 'false',
    allowPets: 'false',
    bringPets: 'false',
    filterGender: 'alla',
    introtext: ''
  });

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    if (inputs.where.length <= 1) {
      setWhereMsg('Glöm inte skriva var ni ska gå.');
    }
    if (inputs.introtext.length <= 1) {
      setMsg('Skriv en rad!');
    }

    if (inputs.where.length > 1) {
      const walk = {
        createdAt: new Date(),
        user: user,
        date: inputs.date,
        time: inputs.time,
        where: inputs.where,
        timeduration: inputs.timeduration,
        allowFriends: inputs.allowFriends,
        allowChildren: inputs.allowChildren,
        allowPets: inputs.allowPets,
        bringPets: inputs.bringPets,
        filterGender: inputs.filterGender,
        introtext: inputs.introtext,
        attendingPeople: []
      };

      createWalkDocument(walk);
      setInputs({
        date: '',
        time: '',
        where: '',
        timeduration: '',
        allowFriends: '',
        allowChildren: '',
        allowPets: '',
        bringPets: '',
        filterGender: '',
        introtext: ''
      });

      history.push('/feed');
    } else console.log('Något fick fel, förök igen');
  };

  return (
    <StyledPostForm>
      <form name="post-form" onSubmit={onSubmit}>
        {' '}
        <div className="headcontainer">
          <BackButton />
          <H1>Ny promenad</H1>
        </div>
        <img src={waves} className="waves green" alt="wave" />
        <img src={graywaves} className="waves gray" alt="wave" />
        <div className="create-new-container">
          <div className="form-box1">
            <div
              className="when form-box1-div"
              onClick={() => {
                setToogleWhen(!toogleWhen);
              }}
              role="button"
              tabIndex="0"
              onKeyDown={() => {
                setToogleWhen(!toogleWhen);
              }}
            >
              <img src={time} alt="time" />
              <span>När vill du gå?</span>
            </div>
            {toogleWhen ? (
              <div>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={inputs.time}
                  onChange={event => onValueChange('time', event.target.value)}
                />
                <img src={calender} alt="calender" />
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={inputs.date}
                  onChange={event => onValueChange('date', event.target.value)}
                />
              </div>
            ) : null}
            <div
              className="where form-box1-div"
              onClick={() => {
                setToogleWhere(!toogleWhere);
              }}
              role="button"
              tabIndex="-1"
              onKeyDown={() => {
                setToogleWhere(!toogleWhere);
              }}
            >
              <img src={location} alt="where" />
              <span>Var vill du gå?</span>
            </div>
            {toogleWhere ? (
              <div>
                <Input
                  id="where"
                  inline
                  name="where"
                  placeholder="Var vill du gå?"
                  value={inputs.where}
                  onChange={event => onValueChange('where', event.target.value)}
                />
                <p className="red">{wheremsg}</p>
              </div>
            ) : null}
            <div
              className="duration form-box1-div"
              onClick={() => {
                setToogleDuration(!toogleDuration);
              }}
              role="button"
              tabIndex="-2"
              onKeyDown={() => {
                setToogleDuration(!toogleDuration);
              }}
            >
              <img src={walking} alt="walk" />
              <span>Hur länge tänker du gå?</span>
            </div>
            {toogleDuration ? (
              <div className="timeduration">
                <label htmlFor="30min">
                  <input
                    type="radio"
                    id="30min"
                    name="timeduration"
                    value="cirka 30 minuter"
                    onChange={event => onValueChange('timeduration', event.target.value)}
                  />
                  <span> cirka 30 minuter</span>
                </label>

                <label htmlFor="cirka 1 timme">
                  <input
                    type="radio"
                    id="cirka 1 timme"
                    name="timeduration"
                    value="cirka 1 timme"
                    onChange={event => onValueChange('timeduration', event.target.value)}
                  />
                  <span> cirka 1 timme</span>
                </label>
                <label htmlFor="cirka 2 timme">
                  <input
                    type="radio"
                    id="cirka 2 timme"
                    name="timeduration"
                    value="cirka 2 timme"
                    onChange={event => onValueChange('timeduration', event.target.value)}
                  />
                  <span> cirka 2 timme</span>
                </label>
              </div>
            ) : null}
          </div>
          <div className="form-box2">
            <CheckBox
              icon={friends}
              id="allowFriends"
              label="Kan vänner följa med?"
              clickHandler={event => onValueChange('allowFriends', event.target.value)}
            />
            <CheckBox
              icon={family}
              id="allowChildren"
              label="Kan barn följa med?"
              clickHandler={event => onValueChange('allowChildren', event.target.value)}
            />
            <CheckBox
              icon={bringPetsvg}
              id="allowPets"
              label="Får husdjur följa med?"
              clickHandler={event => onValueChange('allowPets', event.target.value)}
            />
            <CheckBox
              icon={pets}
              id="bringPets"
              label="Kommer du ta med husdjur?"
              clickHandler={event => onValueChange('bringPets', event.target.value)}
            />
            <CheckBox
              icon={gendericon}
              id="filterGender"
              label="Bara promenera med kvinnor?"
              clickHandler={event => onValueChange('filterGender', event.target.value)}
            />
          </div>
          <div className="form-box3">
            <img src={chat} alt="chat" />
            <textarea
              className="greeting"
              type="text"
              id="introtext"
              name="introtext"
              value={inputs.introtext}
              placeholder="Skriv en hälsning"
              onChange={event => onValueChange('introtext', event.target.value)}
            />

            <p className="red">{msg}</p>
          </div>
          <Button nature="primary" type="submit">
            Skapa{' '}
          </Button>
        </div>
      </form>
    </StyledPostForm>
  );
};

export default PostForm;
