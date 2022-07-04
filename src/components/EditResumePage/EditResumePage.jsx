import React from 'react';
import { useEffect, useState } from 'react';
import { Input, ButtonToolbar, Button } from 'rsuite';
import { useSelector } from 'react-redux';
import s from "./EditResumePage.module.css";
import { getInfo, addInfo, deleteInfo, edit } from "../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import { RouteConst } from '../Routes/RouteConst';




const EditResumePage = () => {
    const resume = useSelector((state => state.resumeReducer.resume))
    
    const [newResumeInfo, setNewResumeInfo] = useState({});

    useEffect(() => {
       getInfo(setNewResumeInfo, "resumeInfo")
    }, []);

  
    const navigate = useNavigate();  
    
   

    return (
        <div className={s.editContent}>
            <div className="editForm">
                <Input className={s.input} size="lg" placeholder={resume.nameSurname} 
                 value={newResumeInfo.nameSurname}
                 onChange={(e) => {
                   setNewResumeInfo({...newResumeInfo, nameSurname:e}) 
                }}
                />
                <Input className={s.input} size="lg" placeholder={resume.age} 
                 value={newResumeInfo.age}
                 onChange={(e) => {
                    setNewResumeInfo({...newResumeInfo, age:e}) 
                 }}/>
                <Input className={s.input} size="lg" placeholder={resume.gmail} 
                 value={newResumeInfo.gmail}
                 onChange={(e) => {
                    setNewResumeInfo({...newResumeInfo, gmail:e})  
                 }}/>

                <Input className={s.input} size="lg" placeholder={resume.phoneNumber} 
                 value={newResumeInfo.phoneNumber}
                 onChange={(e) => {
                    setNewResumeInfo({...newResumeInfo, phoneNumber:e})  
                 }}/>

                <Input className={s.input} size="lg" placeholder={resume.education}
                 value={newResumeInfo.education}
                 onChange={(e) => {
                    setNewResumeInfo({...newResumeInfo, education:e})  
                 }} />
            </div>
            <ButtonToolbar>
                <Button className={s.button} appearance="primary" type="submit" 
                onClick={() => {
                  addInfo(newResumeInfo, "resumeInfo");
                  deleteInfo(newResumeInfo.id);
                  console.log(newResumeInfo);
                  navigate(RouteConst.RESUME_PAGE);
                }}>
                    save changes
                </Button>
            </ButtonToolbar>
        </div>
    );
}

export default EditResumePage;
