import styles from "./TeacherProfileDetail.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Course from "../Course/Course";
import { userActions } from "../../../../store/slices/user-slice";

const TeacherProfileDetail = (props) => {
  const tutorInfo = props.tutorInfo;
  const courses = props.courses;

  const router = useRouter();
  const dispatch = useDispatch();
  const teacherId = router.query.teacherId;

  const bookingHandler = (courseInfo) => {
    dispatch(
      userActions.setBookHomeTutorInfo({
        course: courseInfo,
        info: tutorInfo,
      })
    );
    router.push(`/home-tutor/${teacherId}/booking`);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["details"]}>
          <span className={styles["name"]}>{tutorInfo.name}</span>
          <span>{tutorInfo.qualification}</span>
          <span>{tutorInfo.experience}+ Years of Experience</span>
          <span>{tutorInfo.subjects}</span>
        </div>

        <div className={styles["courses-header"]}>
          <span className={styles["name"]}>Courses</span>
        </div>

        {courses.map((item) => (
          <Course
            key={item.courseId}
            title={item.title}
            subject={item.subject}
            std={item.std}
            price={item.price}
            onClick={bookingHandler.bind(this, item)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherProfileDetail;
