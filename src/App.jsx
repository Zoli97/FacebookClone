import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/auth/Login.jsx";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/Chat/ChatList";
import axios from "./axios";
import Pusher from "pusher-js";
// import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled/theme";
import { GlobalStyles } from "./styled/GlobalStyles";
import { selectChat } from "./store/chat";
import { StateProvider, useStateValue } from "./context/StateProvider";

import reducer, { initialState } from "./context/reducer.js";
import reducerTheme, { initialStateForTheme } from "./context/reducer.js";
import { ThemeProvider } from "./ThemeContext.jsx";
import "./App.css";
function App() {
  // calling the actions that i have in my_theme reducers, in order to call a redux action first i use the dispatch hook to call any action from any reducer
  //const user = " null";
  const [{ user }, dispatch] = useStateValue();
  // const { theme } = useTheme();
  // const { theme } = useSelector((state) => state.my_theme_mode);
  // const currentTheme = theme === "light" ? lightTheme : darkTheme;
  // const chatBoxIsOpen = useSelector(selectChat);
  // const [messages, setMessages] = useState([]);

  //fetching all the initial info, give some kind of response and all messages i want to store and when i get back
  // useEffect(() => {
  //   axios.get("/messages/sync").then((resp) => {
  //     setMessages(resp.data);
  //   });
  // }, []);
  // useEffect(() => {
  //   const pusher = new Pusher("f37c7d1136be9f20aa63", {
  //     cluster: "eu",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", function (data) {
  //     alert(JSON.stringify(data));
  //     //keep all the messages but also the new one
  //     setMessages([...messages, data]);
  //   });

  //   // even the messages changes, only have one subscriber.
  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [messages]);

  // console.log(messages);
  return (
    <>
      <div>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* <StateProvider
              reducer={[reducer, reducerTheme]}
              initialState={[initialState, initialStateForTheme]}
            > */}
            {/* <ThemeProvider> */}
            <ThemeProvider>
              <div className={`parent `}>
                <Header />
                {/* <GlobalStyles /> */}
                {/* App body */}
                <div className="app__body">
                  {/* Sidebar */}
                  <Sidebar />
                  {/* Feed */}
                  <Feed />

                  {/** Chat List */}
                  <ChatList />
                </div>
                {/* {!chatBoxIsOpen && <ChatBox messages={messages} />} */}
                {/* </ThemeProvider> */}
                {/* </StateProvider> */}
              </div>
            </ThemeProvider>
          </>
        )}
      </div>
    </>
  );
}

export default App;
