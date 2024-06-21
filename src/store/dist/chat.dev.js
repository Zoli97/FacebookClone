"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectChat = exports.closeChatBox = exports.chatSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

//create the initial state of the component, the initial state is false dont show the chatbox
var initialState = {
  sendMessageIsOpen: false
}; //now describe an action, these two function return me the actions which is an object that describe me the porpose

var chatSlice = (0, _toolkit.createSlice)({
  name: "chat",
  initialState: initialState,
  reducers: {
    closeChatBox: function closeChatBox(state) {
      state.sendMessageIsOpen = true;
    }
  }
});
exports.chatSlice = chatSlice;
var closeChatBox = chatSlice.actions.closeChatBox;
exports.closeChatBox = closeChatBox;

var selectChat = function selectChat(state) {
  return state.chat.sendMessageIsOpen;
};

exports.selectChat = selectChat;
var _default = chatSlice;
exports["default"] = _default;