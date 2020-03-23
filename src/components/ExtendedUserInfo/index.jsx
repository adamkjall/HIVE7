import React, { useState } from 'react';

import Paragraph from 'components/UI/Paragraph';
import Select from 'components/UI/Select';
import Input from 'components/UI/Input';

const ExtendedUserInfo = () => {
  const [inputs, setInputs] = useState({
    age: '',
    region: '',
    swedishLevel: '',
    countryOfBirth: '',
    genderChoice: '',
    work: '',
    interest: []
  });

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  return (
    <div>
      <Paragraph>Vi vill veta lite mer om dig.</Paragraph>
      <label>
        Välj en bild på dig
        <input type="file" />
      </label>
      <br />
      <Input
        type="number"
        label="Ålder"
        id="age"
        inline
        name="age"
        placeholder="26"
        value={inputs.age}
        onChange={event => onValueChange('age', event.target.value)}
      />
      <Input
        type="text"
        label="Bor i denna region"
        id="region"
        inline
        name="region"
        placeholder="Angered"
        value={inputs.region}
        onChange={event => onValueChange('region', event.target.value)}
      />
      <Input
        type="text"
        label="Född i"
        id="countryOfBirth"
        inline
        name="countryOfBirth"
        placeholder="Sverige"
        value={inputs.countryOfBirth}
        onChange={event => onValueChange('countryOfBirth', event.target.value)}
      />
      <Select
        label="Svenska nivå"
        id="swedishLevel"
        name="swedishLevel"
        value={inputs.swedishLevel}
        onChange={event => onValueChange('swedishLevel', event.target.value)}
      >
        <option value="Red pill">nivå 1</option>
        <option value="Blue pill">nivå 2</option>
        <option value="Green pill">nivå 3</option>
      </Select>
      <Select
        label="Vill du promenera med kvinnor eller män?"
        id="genderChoice"
        name="genderChoice"
        value={inputs.genderChoice}
        onChange={event => onValueChange('genderChoice', event.target.value)}
      >
        <option value="Red pill">Spelar ingen roll</option>
        <option value="Blue pill">Bara med kvinnor</option>
        <option value="Green pill">Bara med män</option>
      </Select>
      <Select
        label="Arbetar du?"
        id="work"
        name="work"
        value={inputs.work}
        onChange={event => onValueChange('work', event.target.value)}
      >
        <option value="Red pill">Jag arbetar inte</option>
        <option value="Blue pill">Jag är student</option>
        <option value="Green pill">Jag har arbete</option>
      </Select>
      {/* {inputs.work == 'Green Pill' ? (
        <Input
          type="text"
          label="arbetar som"
          id="whatKindWork"
          inline
          name="work"
          placeholder="Lärare"
          value={inputs.work}
          onChange={event => onValueChange('work', event.target.value)}
        />
      ) : null} */}
      <p>Välj dina intressen:</p>
      {/*  får kanske komma från en extern lista */}
    </div>
  );
};

export default ExtendedUserInfo;
