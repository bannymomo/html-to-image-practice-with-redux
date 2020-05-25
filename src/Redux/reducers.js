import { CHANGE_FORM_STATE } from "./actions";
const initialState = {
  title: "",
  address: "",
  name: "",
  description: "",
  workingExperience: "",
  education: "",
  contact: ""
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducers;
