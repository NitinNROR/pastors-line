import { combineReducers } from "redux";
const initialState = { contacts: [], loading: true };

const contactsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default combineReducers({
  contactsReducer,
});
