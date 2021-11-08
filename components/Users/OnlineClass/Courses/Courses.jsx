import styles from "./Courses.module.css";
import CourseItem from "../CourseItem/CourseItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onlineClassActions } from "../../../../store/slices/online-class-slice";
import Card from "../../../Utils/UI/Card/Card";
import WhiteCircleLoader from "../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const Courses = (props) => {
  const [isLoading, setIsloading] = useState(true);
  const courses = useSelector((state) => state.onlineClassSlice.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    fetChCourses();
  }, []);

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

    dispatch(onlineClassActions.setCourses(courses));
    setIsloading(false);
  };

  return (
    <>
      {!isLoading && (
        <>
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

          {courses.length === 0 && (
            <div className={styles["no-courses"]}>
              <Card>
                <p>
                  Sorry !!! No Online Courses Available Right Now. Will be
                  Available Soon
                </p>
              </Card>
            </div>
          )}
        </>
      )}

      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
    </>
  );
};

export default Courses;
