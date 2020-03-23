import React, { useState, useContext } from 'react';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { createWalkDocument } from '../../firebase/firebase.utils';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';

import colors from 'tokens/colors.mjs';

const PostForm = () => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    if (inputs.title.length && inputs.text.length) {
      const post = {
        createdAt: new Date(),
        userId: user.id,
        author: user.displayName || user.email,
        title: inputs.title,
        text: inputs.text
      };

      createWalkDocument(post);

      setInputs({
        title: '',
        text: ''
      });
    }
  };

  return (
    <div className="post-form" style={{ width: '100%' }}>
      {isAuthenticated ? (
        <>
          <H1>Formulär</H1>
          <form name="post-form" onSubmit={onSubmit}>
            <Input
              label="Title"
              id="title"
              inline
              name="title"
              placeholder="title"
              value={inputs.title}
              onChange={event => onValueChange('title', event.target.value)}
            />
            <Textarea
              id="post-text"
              name="post-text"
              label="Add your post"
              value={inputs.text}
              onChange={event => onValueChange('text', event.target.value)}
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
