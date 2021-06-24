import { useSelector } from 'react-redux';
import styles from './Admin.module.css';
import Dashboard from './Dashboard/Dashbord';
import Login from './Login/Login';

const Admin = props => {
    const isLoggedIn = useSelector(state => state.adminReducer.isAdminLoggedIn);

    if(isLoggedIn){
        return <Dashboard />
    }else{
        return <Login />
    }
}

export default Admin;