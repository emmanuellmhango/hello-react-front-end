import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice;

export const fetchMessages = async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/messages');
  const { message } = response.data;
  return message;
};
