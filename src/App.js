import React from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NewStudent from "./components/NewStudent";
import ModifyStudent from "./components/ModifyStudent";
import { studentData } from "./studentData";

export default function App() {
  const setInitialLocalStoreage = () => {
    const studentList = localStorage.getItem("studentList");

    if (studentList === null) {
      localStorage.setItem("studentList", JSON.stringify(studentData));
    }
  };
  setInitialLocalStoreage();
  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewStudent" component={NewStudent} />

          <Route path="/ModifyStudent" component={ModifyStudent} />
        </Switch>
      </Router>
    </div>
  );
}
