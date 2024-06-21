//initial state of the reducer
export const initialState = {
  user: null,
};

//action, i had the data layer i can dispatch an action into data layer.
export const actionTypes = {
  SET_USER: "SET_USER",
};

//inside the reducer i listen to it.
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        //return the new data layer ;
        //return whatever currently looks like but change the user to whatever i passed as a user payload inside the action that i dispatch.

        ...state,
        user: action.type,
      };

    default:
      return state;
  }
};
export default reducer;
