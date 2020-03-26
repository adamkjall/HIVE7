import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { createWalkDocument } from '../../firebase/firebase.utils';

import Select from 'components/UI/Select';
import Button from 'components/UI/Button';
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

import colors from 'tokens/colors.mjs';

import { StyledPostForm } from './style';

const PostForm = () => {
  const { user } = useContext(AuthenticationContext);
  const [inputs, setInputs] = useState({
    date: '',
    time: '',
    where: '',
    timeduration: '',
    allowFriends: 'no',
    allowChildren: 'no',
    allowPets: 'no',
    bringPets: 'no',
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

    if (inputs.where.length) {
      const walks = {
        createdAt: new Date(),
        userId: user.id,
        author: user.displayName,
        date: inputs.date,
        time: inputs.time,
        where: inputs.where,
        timeduration: inputs.timeduration,
        allowFriends: inputs.allowFriends,
        allowChildren: inputs.allowChildren,
        allowPets: inputs.allowPets,
        bringPets: inputs.bringPets,
        filterGender: inputs.filterGender,
        introtext: inputs.introtext
      };

      createWalkDocument(walks);
      console.log('funkar');
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
    } else console.log('funka inte');
  };

  return (
    <StyledPostForm>
      <form name="post-form" onSubmit={onSubmit}>
        <div>
          <img src={time} alt="" />
          <p>När vill du gå?</p>
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
        <hr />
        <div>
          <img src={location} alt="where" />
          <Input
            id="where"
            label="Var vill du gå?"
            inline
            name="where"
            placeholder="Var vill du gå?"
            value={inputs.where}
            onChange={event => onValueChange('where', event.target.value)}
          />
        </div>
        <div>
          <img src={walking} alt="walk" />
          <Input
            id="timeduration"
            label="Hur länge tänker du gå?"
            inline
            name="timeduration"
            placeholder="Hur länge tänker du gå?"
            value={inputs.timeduration}
            onChange={event => onValueChange('timeduration', event.target.value)}
          />
        </div>
        <hr />
        <div>
          <img src={friends} alt="bringfriend" />
          <Select
            id="allowFriends"
            name="allowFriends"
            label="Kan vänner följa med?"
            value={inputs.allowFriends}
            onChange={event => onValueChange('allowFriends', event.target.value)}
          >
            <option value="inga vänner">Inga vänner.</option>
            <option value="en vän">De får gärna ta med en vän.</option>
            <option value="gärna">
              De får gärna ta med dig fler vänner, det kanske jag gör med.
            </option>
          </Select>
        </div>
        <div>
          <img src={family} alt="bring children" />
          <Select
            id="allowChildren"
            name="allowChildren"
            label="Kan barn följa med?"
            value={inputs.allowChildren}
            onChange={event => onValueChange('allowChildren', event.target.value)}
          >
            <option value="inga barn">Inga barn.</option>
            <option value="gärna barn">
              De får gärna ta med dig dina barn, det kanske jag gör med.
            </option>
          </Select>
        </div>
        <div>
          <img src={bringPetsvg} alt="bring dog" />
          <Select
            id="allowPets"
            name="allowPets"
            label="Får husdjur följa med?"
            value={inputs.allowPets}
            onChange={event => onValueChange('allowPets', event.target.value)}
            style={{
              color:
                inputs.allowPets === 'no'
                  ? colors.red
                  : inputs.pets === 'yes'
                  ? colors.blue
                  : undefined
            }}
          >
            <option value="inga husdjur" style={{ color: colors.blue }}>
              Jag vill inte gå med husdjur.
            </option>
            <option value="du får ta med husdjur" style={{ color: colors.red }}>
              Det går bra att gå med husdjur.
            </option>
            <option value="other" disabled>
              Om du har med ett annat djur skriv det om din promenad.
            </option>
          </Select>
        </div>
        <div>
          <img src={pets} alt="bring pet" />
          <Select
            id="formbringPets"
            name="bringPets"
            label="Kommer du ta med husdjur??"
            value={inputs.bringPets}
            onChange={event => onValueChange('bringPets', event.target.value)}
          >
            <option value="Jag tar inte med djur">Jag kommer inte ha med husdjur.</option>
            <option value="Jag har med hund">Jag kommer ha med hund/hundar!</option>
            <option value="other" disabled>
              Om du har med ett annat djur skriv det om din promenad.
            </option>
          </Select>
        </div>
        <div>
          <Select
            id="filterGender"
            name="filterGender"
            label="Vem vill du gå med?"
            value={inputs.filterGender}
            onChange={event => onValueChange('filterGender', event.target.value)}
          >
            <option value="all">Alla</option>
            <option value="women">Bara kvinnor</option>
            <option value="men">Bara män</option>
          </Select>
        </div>
        <hr />
        <img src={chat} alt="chat" />
        <Textarea
          id="introtext"
          name="introtext"
          label="Hälsning"
          value={inputs.introtext}
          placeholder="Skriv en hälsning"
          onChange={event => onValueChange('introtext', event.target.value)}
        />

        <Button nature="primary" type="submit">
          Posta!{' '}
        </Button>
        <Link to="/feed">
          <Button type="submit">Vidare till promenader</Button>
        </Link>
      </form>
    </StyledPostForm>
  );
};

export default PostForm;
