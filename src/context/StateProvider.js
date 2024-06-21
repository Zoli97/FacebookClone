import React, { createContext, useContext, useReducer } from "react";

//prepare the data layer
export const StateContext = createContext();

//high order component, wrap the app inside the state provider and provide the sort of dat alayer function.

export const StateProvider = ({ reducer, initialState, children }) => (
  // const combinedReducer = (state, action) => {
  //   return reducers.reduce((accState, reducer) => {
  //     return reducer(accState, action);
  //   }, state);
  // };
  // Apply the combined reducer using useReducer
  // const [state, dispatch] = useReducer(combinedReducer, initialState);

  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//whenever i pull something from data layer i use this hook.
export const useStateValue = () => useContext(StateContext);
