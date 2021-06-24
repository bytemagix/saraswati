import styles from "./TeacherProfileDetail.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Course from "../Course/Course";
import { useEffect } from "react";
import { homeTutorActions } from "../../../../store/slices/home-tutor-slice";
import { userActions } from "../../../../store/slices/user-slice";

const TeacherProfileDetail = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const teacherId = router.query.teacherId;

  const teachers = useSelector((state) => state.homeTutorSlice.homeTutors);
  const info = teachers.find((item) => item.teacherId === teacherId);

  const courses = useSelector(
    (state) => state.homeTutorSlice.selectedTutorCourses
  );

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await fetch(
      `https://saraswati-45e10-default-rtdb.firebaseio.com/teachers/courses/${teacherId}.json`
    );
    const data = await res.json();

    let courses = [];
    for (const key in data) {
      const course = data[key];
      courses.push(course);
    }

    dispatch(homeTutorActions.setSelectedTutorCourses(courses));
  };

  const bookingHandler = (courseInfo) => {
    dispatch(
      userActions.setBookHomeTutorInfo({
        course: courseInfo,
        info: info,
      })
    );
    router.push(`/home-tutor/${teacherId}/booking`);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["details"]}>
          <span className={styles["name"]}>{info.name}</span>
          <span>{info.qualification}</span>
          <span>{info.experience}+ Years of Experience</span>
          <span>{info.subjects}</span>
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
