import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./AddProfile.module.css";

const AddProfile = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const teacherId = useSelector(state => state.teacherAuthReducer.localId);
  console.log(teacherId);

  const nameRef = useRef();
  const qualificationRef = useRef();
  const experienceRef = useRef();
  const subjectRef = useRef();
  const photoRef = useRef();

  const addSubjectHandler = () => {
    setSubjects((state) => state.concat(subjectRef.current.value));
  };

  const addProfileHandler = (event) => {
    event.preventDefault();

    setIsSending(true);
    const name = nameRef.current.value;
    const qualification = qualificationRef.current.value;
    const experience = experienceRef.current.value;
    const photo = photoRef.current.files[0];

    const formData = new FormData();
    formData.append('teacherId',teacherId);
    formData.append("name", name);
    formData.append("qualification", qualification);
    formData.append("experience",experience);
    formData.append("subjects",subjects);
    formData.append("file", photo);

    sendData(formData);
  };

  const sendData = async (formdata) => {
    const res = await fetch("/api/addteacherprofile", {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    console.log(data);
    setIsSending(false);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["book-info"]}>
        <div>
          <h2 className={styles["header"]}>Add Detail</h2>
          <hr />
          <form
            onSubmit={addProfileHandler}
            className={styles["form-controls"]}
            encType="multipart/form-data"
          >
            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>Name</label>
              <input
                type="text"
                className={styles["form-control__input"]}
                ref={nameRef}
              />
            </div>
            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Qualification
              </label>
              <input
                type="text"
                className={styles["form-control__input"]}
                ref={qualificationRef}
              />
            </div>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Experience (Years)
              </label>
              <input
                type="text"
                className={styles["form-control__input"]}
                ref={experienceRef}
              />
            </div>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>Subjects</label>
              <div className={styles["form-add-subject"]}>
                <input type="text" ref={subjectRef} />
                <button type="button" onClick={addSubjectHandler}>Add</button>
              </div>
            </div>

            <div className={styles["subjects"]}>
              {subjects.map((item) => (
                <div className={styles['subject-item']} key={item}>
                  <div className={styles["subject-item__span"]}>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Profile Photo
              </label>
              <input
                type="file"
                className={styles["form-control__input"]}
                ref={photoRef}
              />
            </div>

            <div className={styles["form-actions"]}>
              {!isSending && (
                <button type="submit" className={styles["add-book__button"]}>
                  Add Detail
                </button>
              )}
              {isSending && (
                <div className={styles["spinner"]}>
                  <div className={styles["loader"]}></div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
