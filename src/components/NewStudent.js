import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import style from "./NewStudent.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addingBirthday,
  addingDayAdmission,
  addingGender,
  addingImg,
  addingPhoneNumber,
  addingName,
  saveAddStudent,
} from "../action/actionCreator";
import { Link } from "react-router-dom";

export default function NewStudent() {
  const newStudent = useSelector((state) => state.students.newStudent);
  const imgAdding = useSelector((state) => state.students.newStudent.img);
  const nameAdding = useSelector((state) => state.students.newStudent.name);
  const birthdayAdding = useSelector(
    (state) => state.students.newStudent.birthday
  );
  const phoneNumberAdding = useSelector(
    (state) => state.students.newStudent.phoneNumber
  );
  const dayAdmissionAdding = useSelector(
    (state) => state.students.newStudent.dayAdmission
  );
  const genderAdding = useSelector((state) => state.students.newStudent.gender);

  const dispatch = useDispatch();

  const checkAddStudentContent = () => {
    for (let prop in newStudent) {
      if (newStudent[prop] === "" && prop !== "id") {
        return false;
      }
    }
    return true;
  };

  function handleAddStudent() {
    if (checkAddStudentContent()) {
      dispatch(saveAddStudent());
      dispatch(addingBirthday(""));
      dispatch(addingDayAdmission(""));
      dispatch(addingGender(""));
      dispatch(addingImg("./studentImg/default.png"));
      dispatch(addingPhoneNumber(""));
      dispatch(addingName(""));
    }
  }
  const handleCancleAddStudent = () => {
    dispatch(addingBirthday(""));
    dispatch(addingDayAdmission(""));
    dispatch(addingGender(""));
    dispatch(addingImg("./studentImg/default.png"));
    dispatch(addingPhoneNumber(""));
    dispatch(addingName(""));
  };
  // const reader = new FileReader();
  const handleUploadImage = (objImg) => {
    if (objImg) {
      const urlImg = `./studentImg/${objImg.name}`;

      dispatch(addingImg(urlImg));
    }
  };

  const handleAddName = (name) => {
    if (name) dispatch(addingName(name));
    else return;
  };

  const handleAddPhoneNumber = (phoneNumber) => {
    if (phoneNumber) dispatch(addingPhoneNumber(phoneNumber));
    else return;
  };

  const handleAddBirthday = (birthday) => {
    if (birthday) dispatch(addingBirthday(birthday));
    else return;
  };

  const handleAddDayAdmission = (dayAdmission) => {
    if (dayAdmission) dispatch(addingDayAdmission(dayAdmission));
    else return;
  };

  const handleAddGender = (gender, checked) => {
    if (checked) dispatch(addingGender(gender));
    else return;
  };

  const checkMale = () => {
    if (genderAdding === "Nam") return true;
    else return false;
  };
  const checkFemale = () => {
    if (genderAdding === "Nữ") return true;
    else return false;
  };

  return (
    <div className={style.newStudent}>
      <Link to="/" className={style.link}>
        <div className={style.topbar}>
          <ArrowBackIosIcon className={style.arrowIcon} />
          <h2>Danh sách</h2>
        </div>
      </Link>
      <form className={style.form}>
        <div className={style.firstContent}>
          <div className={style.img_container}>
            <label htmlFor="imageUpload">
              <input
                type="file"
                id="imageUpload"
                className={style.file}
                onChange={(e) => handleUploadImage(e.target.files[0])}
              />
              <img
                className={style.img_student}
                src={imgAdding}
                alt={nameAdding}
              />
            </label>
          </div>
          <input
            className={style.standard2}
            type="text"
            value={nameAdding}
            onChange={(e) => handleAddName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Ngày sinh</label>
          <input
            className={style.standard1}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={birthdayAdding}
            onChange={(e) => handleAddBirthday(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Giới tính</label>
          <div className={style.gender}>
            <div>
              <input
                className={style.standard3}
                type="checkbox"
                checked={checkMale()}
                value="Nam"
                onChange={(e) =>
                  handleAddGender(e.target.value, e.target.checked)
                }
              />
              <label htmlFor="Nam">Nam</label>
            </div>
            <div>
              <input
                className={style.standard3}
                type="checkbox"
                checked={checkFemale()}
                value="Nữ"
                onChange={(e) =>
                  handleAddGender(e.target.value, e.target.checked)
                }
              />
              <label htmlFor="Nữ">Nữ</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="dateAdmission">Ngày nhập học</label>
          <input
            className={style.standard1}
            type="date"
            value={dayAdmissionAdding}
            onChange={(e) => handleAddDayAdmission(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Điện thoại</label>
          <input
            className={style.standard1}
            type="text"
            value={phoneNumberAdding}
            onChange={(e) => handleAddPhoneNumber(e.target.value)}
          />
        </div>
      </form>
      <div className={style.button_group}>
        <Link to="/" className={style.link}>
          <button className={style.add_butt} onClick={handleAddStudent}>
            Thêm
          </button>
        </Link>
        <Link to="/" className={style.link}>
          <button
            className={style.cancel_butt}
            onClick={handleCancleAddStudent}
          >
            Huỷ
          </button>
        </Link>
      </div>
    </div>
  );
}
