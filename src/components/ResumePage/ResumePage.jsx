import React, { useEffect } from "react";
import s from "./ResumePage.module.css";
import { Link } from "react-router-dom";
import { RouteConst } from "../Routes/RouteConst";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getInfo } from "../firebase/firebase";

const ResumePage = () => {
 const [resume, setNewResumeInfo] = useState({});
 useEffect(() => {
  getInfo(setNewResumeInfo, "resumeInfo");
 }, []);

 return (
  <div className={s.MainPageContent}>
   <div className={s.navigation}>
   <span className={s.h1}><h1>Resume</h1></span>
    <Link className={s.login} to={RouteConst.LOGIN_FORM}>
     Log in
    </Link>
   </div>
   <div className={s.resume}>
    <p className={s.info}>name surname: <span className={s.span}>{resume.nameSurname}</span></p>
    <hr />
    <p className={s.info}>age: <span className={s.span}>{resume.age}</span></p>
    <hr />
    <p className={s.info}>gmail: <span className={s.span}>{resume.gmail}</span></p>
    <hr />
    <p className={s.info}>phone number:<span className={s.span}>{resume.phoneNumber}</span></p>
    <hr />
    <p className={s.info}>education:<span className={s.span}>{resume.education}</span></p>
    <hr />
   </div>
  </div>
 );
};

export default ResumePage;