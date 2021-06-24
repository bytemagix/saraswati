import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Teacher.module.css';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';
import TeacherLogin from './TeacherLogin/TeacherLogin';
import TeacherSignUp from './TeacherSignUp/TeacherSignUp';

const Teacher = props => {
    const [showLogin ,setShowLogin] = useState(true);
    const isLoggedIn = useSelector(state => state.teacherAuthReducer.isLoggedIn);

    const toogleForm = () => {
        setShowLogin(state => !state)
    }

    if(isLoggedIn){
        return <TeacherDashboard />
    }

    return ( <>
    {showLogin && <TeacherLogin onClick={toogleForm}  />}
    {!showLogin && <TeacherSignUp onClick={toogleForm} />}
    </>);
}

export default Teacher;