import styles from "./Courses.module.css";
import CourseItem from "../CourseItem/CourseItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onlineClassActions } from '../../../../store/slices/online-class-slice';

const Courses = (props) => {
  const courses = useSelector(state => state.onlineClassSlice.courses);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetChCourses();
  },[]);

  const fetChCourses = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/OnlineClass/Courses.json"
    );
    const data = await res.json();
  
    let courses = [];
    for (const key in data) {
      const course = data[key];
      courses.push(course);
    }

    console.log(courses);

    dispatch(onlineClassActions.setCourses(courses));
  }

  return (
    <div className={styles["courses"]}>
      {courses.map((item) => (
        <CourseItem
          key={item.courseId}
          courseId={item.courseId}
          title={item.courseTitle}
          tutor={item.courseTutor}
          description={item.courseDescription}
        />
      ))}
    </div>
  );
};

export default Courses;
