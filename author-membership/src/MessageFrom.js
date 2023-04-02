import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

const MessageForm = ({ onSendMessage }) => {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage({ sender, content });
    setSender('');
    setContent('');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your name"
          value={sender}
          onChange={(event) => setSender(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Type your message here"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </Wrapper>
  );
};

MessageForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageForm;
