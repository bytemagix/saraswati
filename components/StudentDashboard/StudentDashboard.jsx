import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './StudentDashboard.module.css';

const StudentDashboard = props => {
    const router = useRouter();
    const auth = useSelector(state => state.userSlice.authInfo);

    if(!auth.isAuthenticated){
        router.replace('/');
    }

    return (
        <div className={styles['dashboard']}>
            Student Dashboard
        </div>
    );
}

export default StudentDashboard;