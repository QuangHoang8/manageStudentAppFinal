import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import style from "./NewStudent.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  editingImg,
  editingName,
  editingDayAdmission,
  editingBirthday,
  editingPhoneNumber,
  editingGender,
  saveEditStudent,
} from "../action/actionCreator";
import { Link } from "react-router-dom";

export default function ModifyStudent() {
  const studentisModified = useSelector(
    (state) => state.students.studentisModified
  );
  console.log(studentisModified);
  const editorName = useSelector(
    (state) => state.students.studentisModified.name
  );
  console.log(editorName);
  const editorPhoneNumber = useSelector(
    (state) => state.students.studentisModified.phoneNumber
  );
  const editorBirthday = useSelector(
    (state) => state.students.studentisModified.birthday
  );
  const editorDayAdmission = useSelector(
    (state) => state.students.studentisModified.dayAdmission
  );
  const editorGender = useSelector(
    (state) => state.students.studentisModified.gender
  );
  const editorImg = useSelector(
    (state) => state.students.studentisModified.img
  );
  const dispatch = useDispatch();

  const handleSaveModify = () => {
    dispatch(saveEditStudent());
  };
  console.log(editorName);

  const checkMale = () => {
    if (editorGender === "Nam") return true;
    else return false;
  };
  const checkFemale = () => {
    if (editorGender === "Nữ") return true;
    else return false;
  };
  const handleUploadImage = (objImg) => {
    if (objImg) {
      const urlImg = `./studentImg/${objImg.name}`;
      dispatch(editingImg(urlImg));
    } else return;
  };
  const handleChangeName = (name) => {
    if (name && name !== editorName) dispatch(editingName(name));
    else return;
  };
  const handleChangeBirthday = (birthday) => {
    if (birthday && birthday !== editorBirthday)
      dispatch(editingBirthday(birthday));
    else return;
  };
  const handleChangeDayAdmission = (dayAdmission) => {
    if (dayAdmission && dayAdmission !== editorDayAdmission)
      dispatch(editingDayAdmission(dayAdmission));
    else return;
  };
  const handleChangePhoneNumber = (phoneNumber) => {
    if (phoneNumber && phoneNumber !== editorPhoneNumber)
      dispatch(editingPhoneNumber(phoneNumber));
    else return;
  };
  const handleChangeGender = (gender, checked) => {
    if (checked) dispatch(editingGender(gender));
    else return;
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
              <img src={editorImg} alt={editorName} />
            </label>
          </div>
          <input
            className={style.standard2}
            type="text"
            value={editorName}
            onChange={(e) => handleChangeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Ngày sinh</label>
          <input
            className={style.standard1}
            type="date"
            value={editorBirthday}
            onChange={(e) => handleChangeBirthday(e.target.value)}
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
                  handleChangeGender(e.target.value, e.target.checked)
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
                  handleChangeGender(e.target.value, e.target.checked)
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
            id="dateAdmission"
            name="dateAdmission"
            value={editorDayAdmission}
            onChange={(e) => handleChangeDayAdmission(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Điện thoại</label>
          <input
            className={style.standard1}
            type="text"
            value={editorPhoneNumber}
            onChange={(e) => handleChangePhoneNumber(e.target.value)}
          />
        </div>
      </form>
      <div className={style.button_group}>
        <Link to="/" className={style.link}>
          <button className={style.add_butt} onClick={handleSaveModify}>
            Sửa
          </button>
        </Link>
        <Link to="/" className={style.link}>
          <button className={style.cancel_butt}>Huỷ</button>
        </Link>
      </div>
    </div>
  );
}
