import React, { useState, useContext } from 'react';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';

import colors from 'tokens/colors.mjs';

const PostForm = () => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);
  const [post, setPost] = useState({
    title: '',
    text: ''
  });
  const onValueChange = (name, value) => {
    setPost(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = () => {
    // callback
  };

  return (
    <div className="post-form">
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
              value={post.title}
              onChange={event => onValueChange('title', event.target.value)}
            />
            <Textarea
              id="post-text"
              name="post-text"
              value={post.text}
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
