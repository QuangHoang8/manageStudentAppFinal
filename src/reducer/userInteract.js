import { actionTypes } from "../action/actionTypes";

export const userInteract = (
  state = {
    creating: false,
    modifying: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADDING_STUDENT: {
      return {
        ...state,
        creating: action.payload,
      };
    }

    case actionTypes.MODIFYING_STUDENT: {
      return {
        ...state,
        modifying: action.payload,
      };
    }

    default:
      return state;
  }
};
