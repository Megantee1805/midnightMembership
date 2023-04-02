import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const Sender = styled.span`
  font-weight: bold;
`;

const Message = ({ sender, content }) => {
  return (
    <Wrapper>
      <Sender>{sender}</Sender>
      <span>{content}</span>
    </Wrapper>
  );
};

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
