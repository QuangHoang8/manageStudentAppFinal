import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import style from "./NewStudent.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  // editingImg,
  // editingName,
  // editingDayAdmission,
  // editingBirthday,
  // editingPhoneNumber,
  // editingGender,
  saveEditStudent,
} from "../action/actionCreator";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ModifyStudent() {
  // const studentisModified = useSelector(
  //   (state) => state.students.studentisModified
  // );

  const studentId = +useParams().id;

  const student = useSelector((state) =>
    state.students.studentList.find((s) => s.id === studentId)
  );
  console.log(student);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSaveModify = (values) => {
    dispatch(saveEditStudent(values));
    history.push("/");
  };
  const handleCancelModify = (formChanged) => {
    if (formChanged) {
      if (window.confirm("Form đã thay đổi bản có muốn hủy")) {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  };
  // console.log(editorName);

  // const checkMale = () => {
  //   if (editorGender === "Nam") return true;
  //   else return false;
  // };
  // const checkFemale = () => {
  //   if (editorGender === "Nữ") return true;
  //   else return false;
  // };
  // const handleUploadImage = (objImg) => {
  //   if (objImg) {
  //     const urlImg = `./studentImg/${objImg.name}`;
  //     dispatch(editingImg(urlImg));
  //   } else return;
  // };
  // const handleChangeName = (name) => {
  //   if (name && name !== editorName) dispatch(editingName(name));
  //   else return;
  // };
  // const handleChangeBirthday = (birthday) => {
  //   if (birthday && birthday !== editorBirthday)
  //     dispatch(editingBirthday(birthday));
  //   else return;
  // };
  // const handleChangeDayAdmission = (dayAdmission) => {
  //   if (dayAdmission && dayAdmission !== editorDayAdmission)
  //     dispatch(editingDayAdmission(dayAdmission));
  //   else return;
  // };
  // const handleChangePhoneNumber = (phoneNumber) => {
  //   if (phoneNumber && phoneNumber !== editorPhoneNumber)
  //     dispatch(editingPhoneNumber(phoneNumber));
  //   else return;
  // };
  // const handleChangeGender = (gender, checked) => {
  //   if (checked) dispatch(editingGender(gender));
  //   else return;
  // };

  return (
    <div className={style.newStudent}>
      <div className={style.topbar} onClick={handleCancelModify}>
        <ArrowBackIosIcon className={style.arrowIcon} />
        <h2>Danh sách</h2>
      </div>
      <Formik
        initialValues={{
          ...student,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .matches(/[A-Z]|[a-z]/, "Chỉ điền các ký tự là chữ cái")
            .required("Vui lòng nhập tên"),
          phoneNumber: Yup.number()
            .positive()
            .integer()
            .required("Vui lòng nhập số điện thoại"),
          birthday: Yup.date().required("Vui lòng nhập ngày tháng năm sinh"),
          gender: Yup.string().required("Vui lòng chọn giới tính"),
          dayAdmission: Yup.date().required("Vui lòng điền ngày nhập học"),
        })}
        onSubmit={handleSaveModify}
      >
        {({ values, setFieldValue, handleSubmit, isValid, dirty }) => {
          return (
            <React.Fragment>
              <form className={style.form}>
                <div className={style.firstContent}>
                  <div className={style.img_container}>
                    <label htmlFor="imageUpload">
                      <input
                        type="file"
                        id="imageUpload"
                        className={style.file}
                        onChange={(e) => {
                          const urlImg = `./studentImg/${e.target.files[0].name}`;
                          setFieldValue("img", urlImg, true);
                        }}
                      />
                      <img
                        src={values.img}
                        alt={values.name}
                        // onClick={console.log(values.img)}
                      />
                    </label>
                  </div>
                  <Field className={style.standard2} type="text" name="name" />
                </div>
                <ErrorMessage name="name" />
                <div>
                  <label htmlFor="">Ngày sinh</label>
                  <Field
                    className={style.standard1}
                    type="date"
                    name="birthday"
                  />
                </div>
                <div>
                  <label htmlFor="gender">Giới tính</label>
                  <div className={style.gender}>
                    <div>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="Nam"
                      />
                      <label htmlFor="Nam">Nam</label>
                    </div>
                    <div>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="Nữ"
                      />
                      <label htmlFor="Nữ">Nữ</label>
                    </div>
                  </div>
                  <ErrorMessage name="gender" />
                </div>
                <div>
                  <label htmlFor="dateAdmission">Ngày nhập học</label>
                  <Field
                    className={style.standard1}
                    type="date"
                    id="dateAdmission"
                    name="dayAdmission"
                  />
                </div>
                <ErrorMessage name="dayAdmission" />
                <div>
                  <label htmlFor="phoneNumber">Điện thoại</label>
                  <Field
                    className={style.standard1}
                    type="text"
                    name="phoneNumber"
                  />
                </div>
                <ErrorMessage name="phoneNumber" />
              </form>
              <div className={style.button_group}>
                <button
                  className={style.add_butt}
                  disabled={!isValid}
                  onClick={handleSubmit}
                  type="priamry"
                >
                  Sửa
                </button>
                <button
                  className={style.cancel_butt}
                  onClick={() => {
                    handleCancelModify(dirty);
                  }}
                >
                  Huỷ
                </button>
              </div>
            </React.Fragment>
          );
        }}
      </Formik>
    </div>
  );
}
