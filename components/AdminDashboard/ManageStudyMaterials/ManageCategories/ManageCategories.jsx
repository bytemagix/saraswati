import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../constants/urls";
import AddCategoryModal from "./AddCategoryModal/AddCategoryModal";
import styles from "./ManageCategories.module.css";
import CatItem from "./CatItem/CatItem";
import { useSelector } from "react-redux";

const ManageCategories= (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  
  const [allCategories, setAllCategories] = useState([]);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  const getCatgories = async () => {
    const catRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json"
    );
    const catData = await catRes.json();

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
    formData.append('token', auth.token);
    formData.append("catId", catId);

    const res = await fetch(`${baseUrl}/admin/delete-category`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    getCatgories();
  };

  return (
    <div className={styles["subjects"]}>
      <div className={styles["subject-header"]}>
        <span className={styles["subject-header-title"]}>Manage Categories ( Filters )</span>
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
            key={item.catId}
            name={item.title}
            ondelete={deleteCatHandler.bind(this, item.catId)}
          />
        ))}
      </div>
      {isAddCatModalOpen && (
        <div className={styles["modal"]}>
          <AddCategoryModal
            onClose={addCatModalCloseHandler}
            ondelete={deleteCatHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
