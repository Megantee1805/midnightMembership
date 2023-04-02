import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const PrivateMessagingPage = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('messages')
      .where('users', 'array-contains', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(newMessages);
      });

    return unsubscribe;
  }, [currentUser]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = async (event) => {
    event.preventDefault();

    const message = {
      text: newMessage,
      users: [currentUser.uid],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await firebase.firestore().collection('messages').add(message);

    setNewMessage('');
  };

  return (
    <div>
      <h1>Private Messaging</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleNewMessageSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default PrivateMessagingPage;
