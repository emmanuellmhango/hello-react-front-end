import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, fetchMessages } from './state/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const msg = await fetchMessages();
        dispatch(addMessage(msg));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    getMessages();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
