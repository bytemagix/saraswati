import styles from "./AddCourseModal.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../../constants/urls";
import { useSelector } from "react-redux";

const AddCourseModal = (props) => {
  const auth = useSelector((state) => state.homeTutorUserSlice.authInfo);
  const [enteredFee, setEnteredFee] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredCatId, setEnteredCatId] = useState("");
  const [categories, setCategories] = useState([]);

  const [enteredAgeGroup, setEnteredAgeGroup] = useState("");
  const [enteredAgeGroupId, setEnteredAgeGroupId] = useState("");
  const [ageGroups, setAgeGroups] = useState([]);

  const feeChangeHandler = (event) => {
    setEnteredFee(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCatId(event.target.value);

    const category = categories.find(
      (item) => item.subId === event.target.value
    );
    setEnteredCategory(category.subject);
  };

  const ageGroupChangeHandler = (event) => {
    setEnteredAgeGroupId(event.target.value);

    const ageGroup = ageGroups.find(
      (item) => item.ageGroupId === event.target.value
    );
    setEnteredAgeGroup(ageGroup.ageGroup);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Validation
    const formData = new FormData();
    formData.append("tutorId", auth.localId);
    formData.append("course", enteredCategory);
    formData.append("ageGroup",enteredAgeGroup);
    formData.append("courseFee",enteredFee);

    addCategory(formData);
  };

  const addCategory = async (formdata) => {
    const res = await fetch(`${baseUrl}/home-tutor/add-course`, {
      method: "POST",
      body: formdata,
    });

    const data = await res.json();
    props.onClose();
  };

  const fetchCategories = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Subjects.json"
    );
    const data = await res.json();

    let categories = [];
    for (const key in data) {
      const cat = data[key];
      categories.push(cat);
    }
    setCategories(categories);

    if (categories.length !== 0) {
      setEnteredCatId(categories[0].subId);
      setEnteredCategory(categories[0].subject);
    }
  };

  const fetchLevels = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/AgeGroups.json"
    );
    const data = await res.json();

    let ageGroups = [];
    for (const key in data) {
      const cat = data[key];
      ageGroups.push(cat);
    }
    setAgeGroups(ageGroups);

    if (ageGroups.length !== 0) {
      setEnteredAgeGroupId(ageGroups[0].ageGroupId);
      setEnteredAgeGroup(ageGroups[0].ageGroup);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchLevels();
  }, []);

  return (
    <div className={styles["checkout"]}>
      <div className={styles["card"]}>
        <header className={styles["modal-header"]}>Add Course</header>
        <div>
          <hr />
        </div>
        <div className={styles["form-controls"]}>
          <form onSubmit={formSubmitHandler}>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Categories
              </label>
              <select
                onChange={categoryChangeHandler}
                value={enteredCatId}
                className={styles["form-control__select"]}
              >

                {categories.map((item) => {
                  return (
                    <option key={item.subId} value={item.subId}>
                      {item.subject}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Student Levels
              </label>
              <select
                onChange={ageGroupChangeHandler}
                value={enteredAgeGroupId}
                className={styles["form-control__select"]}
              >
                {ageGroups.map((item) => {
                  return (
                    <option key={item.ageGroupId} value={item.ageGroupId}>
                      {item.ageGroup}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles['fee-box']}>
              <label className={styles['fee-box__label']}>Course Fee ( Per Class )</label>
            <input
              type="text"
              id="category"
              value={enteredFee}
              onChange={feeChangeHandler}
              className={styles["input"]}
            />
            </div>

            <div className={styles["actions"]}>
              <button type="submit" className={styles["button-order"]}>
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
    </div>
  );
};
export default AddCourseModal;