import { studentData } from "../studentData";
import { actionTypes } from "../action/actionTypes";

const studentModify = {
  id: "",
  name: "",
  age: "",
  phoneNumber: "",
  birthday: "",
  gender: "",
  dayAdmission: "",
  img: "",
};

const setStudentList = () => {
  const modifiedList = localStorage.getItem("modifiedList");
  const addedList = localStorage.getItem("addedList");
  if (modifiedList && addedList)
    return studentData
      .map(
        (student) =>
          JSON.parse(modifiedList).find((item) => item.id === student.id) ||
          student
      )
      .concat(JSON.parse(addedList));
  else if (modifiedList && !addedList)
    return studentData.map(
      (student) =>
        JSON.parse(modifiedList).find((item) => item.id === student.id) ||
        student
    );
  else if (!modifiedList && addedList)
    return studentData.concat(JSON.parse(addedList));
  else return studentData;
};

const initialState = {
  newStudent: {
    id: "",
    name: "",
    age: "",
    phoneNumber: "",
    birthday: "",
    gender: "",
    dayAdmission: "",
    img: "./studentImg/default.png",
  },
  studentisModified: studentModify,
  studentList: setStudentList(),
  totalStudent: setStudentList().length,
  studentMatchedWithSearch: [],
};

export const students = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.SEARCH_STUDENT: {
    //   return {
    //     ...state,
    //     studentMatchedWithSearch: action.payload.studentsMatched,
    //   };
    // }

    case actionTypes.MODIFY_STUDENT.EDITING_IMG: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          img: action.payload.urlImg,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_NAME: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          name: action.payload.name,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_PHONENUMBER: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_BIRTHDAY: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          birthday: action.payload.birthday,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_DAYADMISSION: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          dayAdmission: action.payload.dayAdmission,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_GENDER: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          gender: action.payload.gender,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_IMG: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          img: action.payload.urlImg,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_NAME: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          name: action.payload.name,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_PHONENUMBER: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_BIRTHDAY: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          birthday: action.payload.birthday,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_DAYADMISSION: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          dayAdmission: action.payload.dayAdmission,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_GENDER: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          gender: action.payload.gender,
        },
      };
    }
    default:
      return state;
  }
};
