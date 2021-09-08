import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../constants/urls";
import AddCourseModal from "./AddCourseModal/AddCourseModal";
import styles from "./Courses.module.css";
import CourseItem from './CourseItem/CourseItem';
import { useSelector } from "react-redux";

const Courses = (props) => {
  const auth = useSelector(state => state.homeTutorUserSlice.authInfo);
  
  const [allCategories, setAllCategories] = useState([]);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  const getCatgories = async () => {
    const catRes = await fetch(
      `https://saraswati-45e10-default-rtdb.firebaseio.com/Test/HomeTutors/Profiles/${auth.localId}/Courses.json`
    );
    const catData = await catRes.json();
    console.log(auth.localId);
    console.log(catData);

    let categories = [];
    for (const key in catData) {
      const cat = { ...catData[key], selected: false };
      categories.push(cat);
    }
    setAllCategories(categories);
  };

  useEffect(() => {
    getCatgories();
  }, []);

  const addCatModalOpenHandler = () => {
    setIsAddCatModalOpen(true);
  };

  const addCatModalCloseHandler = () => {
    setIsAddCatModalOpen(false);
    getCatgories();
  };

  const deleteCatHandler = (catId) => {
    deleteCategory(catId);
  };

  const deleteCategory = async (catId) => {
    const formData = new FormData();
    formData.append('tutorId', auth.localId);
    formData.append("courseId", catId);

    const res = await fetch(`${localUrl}/home-tutor/delete-course`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    getCatgories();
  };

  return (
    <div className={styles["subjects"]}>
      <div className={styles["subject-header"]}>
        <span className={styles["subject-header-title"]}>Manage Courses</span>
        <span
          className={styles["add-subject-btn"]}
          onClick={addCatModalOpenHandler}
        >
          Add New
        </span>
      </div>
      <hr />
      <div className={styles["sub-grid"]}>
        {allCategories.map((item) => (
          <CourseItem
            key={item.courseId}
            name={item.course}
            ageGroup={item.ageGroup}
            courseFee={item.courseFee}
            ondelete={deleteCatHandler.bind(this, item.courseId)}
          />
        ))}
      </div>
      {isAddCatModalOpen && (
        <div className={styles["modal"]}>
          <AddCourseModal
            onClose={addCatModalCloseHandler}
            ondelete={deleteCatHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Courses;