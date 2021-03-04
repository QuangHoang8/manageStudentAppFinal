import { actionTypes } from "./actionTypes";

export const changeInputSearchStudent = (studentInfo) => {
  return {
    type: actionTypes.CHANGE_INPUT_SEARCH,
    payload: { studentInfo },
  };
};
export const findStudent = () => {
  return {
    type: actionTypes.SEARCH_STUDENT,
    payload: {},
  };
};
export const moveToPreViousPage = () => ({
  type: actionTypes.MOVE_TO_PREVIOUSPAGE,
  payload: {},
});

export const moveToNextPage = () => ({
  type: actionTypes.MOVE_TO_NEXTPAGE,
  payload: {},
});

export const moveExactlyToPage = (page) => ({
  type: actionTypes.MOVE_EXACTLY_TO_PAGE,
  payload: {
    page,
  },
});
export const changePageNumbers = (studentList) => ({
  type: actionTypes.CHANGE_PAGENUMBERS,
  payload: { studentList },
});

export const changeStartPagesButtonRendered = (page) => ({
  type: actionTypes.CHANGE_PAGE_BUTTON_RENDERED,
  payload: { page },
});

export const searchStudent = (studentsMatched) => ({
  type: actionTypes.SEARCH_STUDENT,
  payload: {
    studentsMatched,
  },
});
export const editingId = (id) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_ID,
  payload: {
    id,
  },
});
export const editingImg = (urlImg) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_IMG,
  payload: {
    urlImg,
  },
});

export const editingName = (name) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_NAME,
  payload: {
    name,
  },
});

export const editingPhoneNumber = (phoneNumber) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_PHONENUMBER,
  payload: {
    phoneNumber,
  },
});

export const editingBirthday = (birthday) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_BIRTHDAY,
  payload: {
    birthday,
  },
});

export const editingDayAdmission = (dayAdmission) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_DAYADMISSION,
  payload: {
    dayAdmission,
  },
});

export const editingGender = (gender) => ({
  type: actionTypes.MODIFY_STUDENT.EDITING_GENDER,
  payload: {
    gender,
  },
});

export const saveEditStudent = () => ({
  type: actionTypes.MODIFY_STUDENT.SAVE_EDIT,
  payload: {},
});

export const addingId = (id) => ({
  type: actionTypes.ADD_STUDENT.ADDING_ID,
  payload: {
    id,
  },
});

export const addingImg = (urlImg) => ({
  type: actionTypes.ADD_STUDENT.ADDING_IMG,
  payload: {
    urlImg,
  },
});

export const addingName = (name) => ({
  type: actionTypes.ADD_STUDENT.ADDING_NAME,
  payload: {
    name,
  },
});

export const addingPhoneNumber = (phoneNumber) => ({
  type: actionTypes.ADD_STUDENT.ADDING_PHONENUMBER,
  payload: {
    phoneNumber,
  },
});

export const addingDayAdmission = (dayAdmission) => ({
  type: actionTypes.ADD_STUDENT.ADDING_DAYADMISSION,
  payload: {
    dayAdmission,
  },
});

export const addingBirthday = (birthday) => ({
  type: actionTypes.ADD_STUDENT.ADDING_BIRTHDAY,
  payload: {
    birthday,
  },
});

export const addingGender = (gender) => ({
  type: actionTypes.ADD_STUDENT.ADDING_GENDER,
  payload: {
    gender,
  },
});

export const saveAddStudent = () => ({
  type: actionTypes.ADD_STUDENT.SAVE_ADD,
  payload: {},
});
