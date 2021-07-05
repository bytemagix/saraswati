import { useEffect, useState } from "react";
import { localUrl } from "../../../../constants/urls";
import AddSubjectModal from "./AddSubjectModal/AddSubjectModal";
import styles from "./ManageSubjects.module.css";
import SubItem from "./SubItem/SubItem";

const ManageSubjects = (props) => {
  const [allSubjects, setAllSubjects] = useState([]);
  const [isAddSubModalOpen, setIsAddSubModalOpen] = useState(false);

  const getSubjects = async () => {
    const subRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/subjects.json"
    );
    const subData = await subRes.json();

    let subjects = [];
    for (const key in subData) {
      const sub = { ...subData[key], selected: false };
      subjects.push(sub);
    }
    setAllSubjects(subjects);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  const addSubModalOpenHandler = () => {
    setIsAddSubModalOpen(true);
  };

  const addSubModalCloseHandler = () => {
    setIsAddSubModalOpen(false);
    getSubjects();
  };

  const deleteSubHandler = (subId) => {
    deleteSubject(subId);
  };

  const deleteSubject = async (subId) => {
    const formData = new FormData();
    formData.append("subId", subId);

    const res = await fetch(`${localUrl}/study-materials/delete-subject`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    getSubjects();
  };

  return (
    <div className={styles["subjects"]}>
      <div className={styles["subject-header"]}>
        <span className={styles["subject-header-title"]}>Manage Subjects</span>
        <span
          className={styles["add-subject-btn"]}
          onClick={addSubModalOpenHandler}
        >
          Add New
        </span>
      </div>
      <hr />
      <div className={styles["sub-grid"]}>
        {allSubjects.map((item) => (
          <SubItem
            key={item.subId}
            name={item.title}
            ondelete={deleteSubHandler.bind(this, item.subId)}
          />
        ))}
      </div>
      {isAddSubModalOpen && (
        <div className={styles["modal"]}>
          <AddSubjectModal
            onClose={addSubModalCloseHandler}
            ondelete={deleteSubHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ManageSubjects;
