import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from '../Message/Message';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageList = ({ messages }) => {
  return (
    <Wrapper>
      {messages.map((message) => (
        <Message
          key={message.id}
          sender={message.sender}
          content={message.content}
        />
      ))}
    </Wrapper>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
