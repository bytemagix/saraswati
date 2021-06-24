import styles from "./Courses.module.css";
import CourseItem from "../CourseItem/CourseItem";
import { useSelector } from "react-redux";

const Courses = (props) => {
  const courses = useSelector(state => state.onlineClassSlice.courses);

  return (
    <div className={styles["courses"]}>
      {courses.map((item) => (
        <CourseItem
          key={item.courseId}
          courseId={item.courseId}
          title={item.title}
          tutor={item.tutor}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Courses;
