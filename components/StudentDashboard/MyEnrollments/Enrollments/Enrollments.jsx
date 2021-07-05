import styles from "./Enrollment.module.css";
import CourseItem from "./CourseItem/CourseItem";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const Enrollments = (props) => {
  const [courses, setCourses] = useState([]);

  const auth = useSelector(state => state.userSlice.authInfo);

  useEffect(() => {
    fetChCourses();
  }, []);

  const fetChCourses = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/OnlineClass/Enrollments.json"
    );
    const data = await res.json();

    const enrolledCourses = [];

    for(const courseId in data){
      for(const userId in data[courseId]){
        if(userId === auth.localId){
          const course = data[courseId][userId];
          console.log(course);
          enrolledCourses.push(course);
        }
      }
    }
    console.log(enrolledCourses);
    setCourses(enrolledCourses);
    console.log(courses);
  };

  return (
    <div className={styles["enrollments"]}>
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

export default Enrollments;
