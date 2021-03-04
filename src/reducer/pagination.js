import { actionTypes } from "../action/actionTypes";
import { studentData } from "../studentData";

const pageNumbers = (studentList) => {
  const itemPerPage = 6;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(studentList / itemPerPage); i++) {
    pageNumber.push(i);
  }
  return pageNumber;
};

export const pagination = (
  state = {
    pageNumbers: pageNumbers(studentData.length),
    currentPage: 1,
    startPagesButtonRendered: 1,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.MOVE_TO_NEXTPAGE: {
      return handleNextPage(state);
    }
    case actionTypes.MOVE_TO_PREVIOUSPAGE: {
      return handlePrePage(state);
    }
    case actionTypes.MOVE_EXACTLY_TO_PAGE: {
      return {
        ...state,
        currentPage: action.payload.page,
      };
    }
    case actionTypes.CHANGE_PAGENUMBERS: {
      return {
        ...state,
        pageNumbers: pageNumbers(action.payload.studentList),
      };
    }
    case actionTypes.CHANGE_PAGE_BUTTON_RENDERED: {
      return {
        ...state,
        startPagesButtonRendered: action.payload.page,
      };
    }
    // case actionTypes.DECREASE_PAGENUMBER: {
    //   return {
    //     ...state,
    //     pagesNumber: state.pagesNumber.map((number) => number - 1),
    //   };
    // }

    default:
      return state;
  }
};

const handlePrePage = (currentState) => {
  if (currentState.startPagesButtonRendered > 1) {
    return {
      ...currentState,
      currentPage: currentState.currentPage - 1,
      startPagesButtonRendered: currentState.startPagesButtonRendered - 1,
    };
  } else if (currentState.currentPage > 1) {
    return {
      ...currentState,
      currentPage: currentState.currentPage - 1,
    };
  } else {
    return { ...currentState, startPagesButtonRendered: 1 };
  }
};
const handleNextPage = (currentState) => {
  if (
    currentState.startPagesButtonRendered <
    currentState.pageNumbers.length - 2
  ) {
    return {
      ...currentState,
      currentPage: currentState.currentPage + 1,
      startPagesButtonRendered: currentState.startPagesButtonRendered + 1,
    };
  } else if (currentState.currentPage < currentState.pageNumbers.length) {
    return {
      ...currentState,
      currentPage: currentState.currentPage + 1,
    };
  } else {
    return {
      ...currentState,
      startPagesButtonRendered: currentState.pageNumbers.length - 2,
    };
  }
};
