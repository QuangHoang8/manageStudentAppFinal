import { actionTypes } from "../action/actionTypes";
import { studentData } from "../studentData";
import { v4 as uuidv4 } from "uuid";

const setStudentList = (studentDatabase) => {
  localStorage.setItem("studentList", JSON.stringify(studentDatabase));
  const studentList = localStorage.getItem("studentList");
  return JSON.parse(studentList);
};
const student = {
  id: "",
  name: "",
  phoneNumber: "",
  birthday: "",
  gender: "",
  dayAdmission: "",
  img: "./studentImg/default.png",
};
const initialState = {
  studentInfo: "",
  studentList: studentData,
  studentSearchList: "",
  studentisModified: student,
  newStudent: student,
  isFinded: false,
  isSearching: false,
};
export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_SEARCH: {
      return { ...state, studentInfo: action.payload.studentInfo };
    }
    case actionTypes.SEARCH_STUDENT: {
      return handleSearchStudent(state);
    }
    case actionTypes.MODIFY_STUDENT.EDITING_ID: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          id: action.payload.id,
        },
      };
    }
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
    case actionTypes.MODIFY_STUDENT.SAVE_EDIT: {
      const modifiedStudent = action.payload.modifiedStudent;
      console.log(modifiedStudent);
      const newStudentList = state.studentList.map((s) =>
        s.id === modifiedStudent.id ? modifiedStudent : s
      );
      console.log(newStudentList);
      return { ...state, studentList: setStudentList(newStudentList) };
    }

    case actionTypes.ADD_STUDENT.SAVE_ADD: {
      const newStudentList = [{ ...action.payload.newStudent, id: uuidv4() }];

      const studentLists = [...state.studentList, ...newStudentList];

      return { ...state, studentList: setStudentList(studentLists) };
    }

    default:
      return state;
  }
};
const handleSearchStudent = (currentState) => {
  if (currentState.studentInfo) {
    let lowerCaseStudentInfo = currentState.studentInfo.toLowerCase();
    const studentFinded = JSON.parse(
      localStorage.getItem("studentList")
    ).filter(
      (student) =>
        student.name.toLowerCase().indexOf(lowerCaseStudentInfo) !== -1 ||
        student.phoneNumber.toLowerCase().indexOf(lowerCaseStudentInfo) !== -1
    );
    console.log(currentState.studentList);
    if (studentFinded.length !== 0) {
      return {
        ...currentState,
        studentSearchList: studentFinded,
        isFinded: true,
        isSearching: true,
      };
    } else {
      return {
        ...currentState,
        isFinded: false,
        studentSearchListt: "",
        isSearching: true,
      };
    }
  } else {
    return {
      ...currentState,
      studentSearchList: "",
      isFinded: false,
      isSearching: false,
    };
  }
};
// const handleSaveEditStudent = (currentState) => {
//   const studentLists = JSON.parse(localStorage.getItem("studentList")).map(
//     (student) => {
//       if (student.id !== currentState.studentisModified.id) {
//         return student;
//       }
//       console.log(currentState.studentisModified.name);
//       const studentModify = {
//         ...student,
//         name: currentState.studentisModified.name,
//         phoneNumber: currentState.studentisModified.phoneNumber,
//         birthday: currentState.studentisModified.birthday,
//         gender: currentState.studentisModified.gender,
//         dayAdmission: currentState.studentisModified.dayAdmission,
//         img: currentState.studentisModified.img,
//       };
//       return studentModify;
//     }
//   );
//   console.log(studentLists);
//   let studentSearchLists = [];
//   if (currentState.studentSearchList !== "") {
//     const studentSearchListsModified = currentState.studentSearchList.map(
//       (student) => {
//         if (student.id !== currentState.studentisModified.id) {
//           return student;
//         }
//         const studentModify = {
//           ...student,
//           name: currentState.studentisModified.name,
//           phoneNumber: currentState.studentisModified.phoneNumber,
//           birthday: currentState.studentisModified.birthday,
//           gender: currentState.studentisModified.gender,
//           dayAdmission: currentState.studentisModified.dayAdmission,
//           img: currentState.studentisModified.img,
//         };
//         return studentModify;
//       }
//     );
//     studentSearchLists = [...studentSearchListsModified];
//   }
//   console.log(studentSearchLists);
//   return {
//     ...currentState,
//     studentList: setStudentList(studentLists),
//     studentSearchList: studentSearchLists,
//   };
// };
// const handleSaveAddStudent = (currentState) => {
//   const newStudent = [
//     {
//       ...currentState.newStudent,
//       id: uuidv4(),
//     },
//   ];

//   const studentLists = [...currentState.studentList, ...newStudent];

//   return { ...currentState, studentList: setStudentList(studentLists) };
// };
