import { createSlice } from "@reduxjs/toolkit";

//create the initial state of the component, the initial state is false dont show the chatbox
const initialState = {
  sendMessageIsOpen: false,
};

//now describe an action, these two function return me the actions which is an object that describe me the porpose
export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    closeChatBox: (state) => {
      state.sendMessageIsOpen = true;
    },
  },
});

export const { closeChatBox } = chatSlice.actions;
export const selectChat = (state) => state.chat.sendMessageIsOpen;
export default chatSlice;
