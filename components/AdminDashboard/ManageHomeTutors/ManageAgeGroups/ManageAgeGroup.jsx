import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../constants/urls";
import AddAgeGroupModal from "./AddAgeGroupModal/AddAgeGroupModal";
import styles from "./ManageAgeGroup.module.css";
import CatItem from "./CatItem/CatItem";
import { useSelector } from "react-redux";

const ManageAgeGroup = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  
  const [allCategories, setAllCategories] = useState([]);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  const getCatgories = async () => {
    const catRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/AgeGroups.json"
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

  const deleteCatHandler = (ageGroupId) => {
    deleteCategory(ageGroupId);
  };

  const deleteCategory = async (ageGroupId) => {
    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("ageGroupId", ageGroupId);

    const res = await fetch(`${baseUrl}/admin/delete-age-group`, {
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
        <span className={styles["subject-header-title"]}>Manage Student Age Group ( Home Tutor)</span>
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
            key={item.ageGroupId}
            name={item.ageGroup}
            ondelete={deleteCatHandler.bind(this, item.ageGroupId)}
          />
        ))}
      </div>
      {isAddCatModalOpen && (
        <div className={styles["modal"]}>
          <AddAgeGroupModal
            onClose={addCatModalCloseHandler}
            ondelete={deleteCatHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ManageAgeGroup;
