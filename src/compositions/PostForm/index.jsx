import React, { useState, useContext } from 'react';

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
import bringPets from '../../assets/icons/bringPets.svg';
import walking from '../../assets/icons/walking.svg';
import time from '../../assets/icons/time.svg';
import calender from '../../assets/icons/calender.svg';

import colors from 'tokens/colors.mjs';

const PostForm = () => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);
  const [inputs, setInputs] = useState({
    date: '',
    time: '',
    where: '',
    timeduration: '',
    allowFriends: '',
    allowChildren: '',
    allowPets: '',
    pets: '',
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

    if (inputs.where.length && inputs.text.length) {
      const post = {
        createdAt: new Date(),
        userId: user.id,
        author: user.displayName || user.email,
        date: inputs.date,
        time: inputs.time,
        where: inputs.where,
        timeduration: inputs.timeduration,
        allowFriends: inputs.allowfriends,
        allowChildren: inputs.allowChildren,
        allowPets: inputs.allowpets,
        pets: inputs.pets,
        introtext: inputs.introtext
      };

      createWalkDocument(post);

      setInputs({
        date: '',
        time: '',
        where: '',
        timeduration: '',
        allowFriends: '',
        allowChildren: '',
        allowPets: '',
        pets: '',
        introtext: ''
      });
    }
  };

  return (
    <div className="post-form" style={{ width: '100%' }}>
      {isAuthenticated ? (
        <>
          <form name="post-form" onSubmit={onSubmit}>
            <img src={time} alt="" />
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
            <hr />
            <img src={location} alt="where" />
            <Input
              id="where"
              label="var"
              inline
              name="where"
              placeholder="Var vill du gå?"
              value={inputs.where}
              onChange={event => onValueChange('where', event.target.value)}
            />
            <img src={walking} alt="walk" />
            <Input
              id="timeduration"
              label="hur länge"
              inline
              name="timeduration"
              placeholder="Hur länge tänker du gå?"
              value={inputs.timeduration}
              onChange={event => onValueChange('timeduration', event.target.value)}
            />
            <hr />
            <img src={friends} alt="bringfriend" />
            <Select
              id="friends"
              name="friends"
              label="vänner"
              value={inputs.friends}
              onChange={event => onValueChange('friends', event.target.value)}
              style={{
                color:
                  inputs.friends === 'noFriends'
                    ? colors.red
                    : inputs.friends === 'oneFriend'
                    ? colors.blue
                    : inputs.friends === 'allFriends'
                    ? colors.green
                    : undefined
              }}
            >
              <option value="noFriends" style={{ color: colors.red }}>
                Inga vänner.
              </option>
              <option value="oneFriend" style={{ color: colors.blue }}>
                De får gärna ta med en vän.
              </option>
              <option value="allFriends" style={{ color: colors.green }}>
                De får gärna ta med dig fler vänner, det kanske jag gör med.
              </option>
            </Select>
            <img src={family} alt="bring children" />
            <Select
              id="allowchildren"
              name="allowchildren"
              label=""
              value={inputs.friends}
              onChange={event => onValueChange('allowchildren', event.target.value)}
              style={{
                color:
                  inputs.friends === 'false'
                    ? colors.red
                    : inputs.friends === 'yes'
                    ? colors.blue
                    : undefined
              }}
            >
              <option value="noChildren" style={{ color: colors.red }}>
                Inga barn.
              </option>
              <option value="allowchildren" style={{ color: colors.green }}>
                De får gärna ta med dig dina barn, det kanske jag gör med.
              </option>
            </Select>
            <img src={bringPets} alt="bring dog" />
            <Select
              id="allowPets"
              name="allowPets"
              label="Får de ha med djur"
              value={inputs.allowPets}
              onChange={event => onValueChange('allowPets', event.target.value)}
              style={{
                color:
                  inputs.pets === 'no'
                    ? colors.red
                    : inputs.pets === 'yes'
                    ? colors.blue
                    : undefined
              }}
            >
              <option value="no" style={{ color: colors.blue }}>
                Jag vill inte gå med husdjur.
              </option>
              <option value="yes" style={{ color: colors.red }}>
                Det går bra att gå med husdjur.
              </option>
              <option value="other" disabled>
                Om du har med ett annat djur skriv det om din promenad.
              </option>
            </Select>
            <img src={pets} alt="bring pet" />
            <Select
              id="pets"
              name="pets"
              label="kommer jag ha med djur"
              value={inputs.pets}
              onChange={event => onValueChange('pets', event.target.value)}
              style={{
                color:
                  inputs.pets === 'no'
                    ? colors.red
                    : inputs.pets === 'yes'
                    ? colors.blue
                    : undefined
              }}
            >
              <option value="no" style={{ color: colors.blue }}>
                Jag kommer inte ha med husdjur.
              </option>
              <option value="yes" style={{ color: colors.red }}>
                Jag kommer ha med hund/hundar!
              </option>
              <option value="other" disabled>
                Om du har med ett annat djur skriv det om din promenad.
              </option>
            </Select>
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
            <Button nature="primary" stretch type="submit">
              Posta!{' '}
            </Button>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default PostForm;
