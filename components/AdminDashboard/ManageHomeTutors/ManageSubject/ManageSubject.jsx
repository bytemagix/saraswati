import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../constants/urls";
import AddSubjectModal from "./AddSubjectModal/AddSubjectModal";
import styles from "./ManageSubject.module.css";
import CatItem from "./CatItem/CatItem";
import { useSelector } from "react-redux";

const ManageSubjects = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  
  const [allCategories, setAllCategories] = useState([]);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  const getCatgories = async () => {
    const catRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/Test/HomeTutors/Subjects.json"
    );
    const catData = await catRes.json();

    let categories = [];
    for (const key in catData) {
      const cat = { ...catData[key]};
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

  const deleteCatHandler = (subId) => {
    deleteCategory(subId);
  };

  const deleteCategory = async (subId) => {
    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("subId", subId);

    const res = await fetch(`${localUrl}/admin/delete-subject`, {
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
        <span className={styles["subject-header-title"]}>Manage Subjects ( Home Tutor)</span>
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
          <CatItem
            key={item.subId}
            name={item.subject}
            ondelete={deleteCatHandler.bind(this, item.subId)}
          />
        ))}
      </div>
      {isAddCatModalOpen && (
        <div className={styles["modal"]}>
          <AddSubjectModal
            onClose={addCatModalCloseHandler}
            ondelete={deleteCatHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ManageSubjects;
