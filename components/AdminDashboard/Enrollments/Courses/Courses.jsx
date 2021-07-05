import styles from "./Courses.module.css";
import CourseItem from "./CourseItem/CourseItem";
import { useEffect, useState } from "react";

const Courses = (props) => {
  const [courses, setCourses] = useState([]);

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
    setCourses(courses);
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