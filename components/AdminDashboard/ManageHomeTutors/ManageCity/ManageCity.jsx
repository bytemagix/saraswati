import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../constants/urls";
import AddCategoryModal from "./AddCityModal/AddCityModal";
import styles from "./ManageCity.module.css";
import CatItem from "./CatItem/CatItem";
import { useSelector } from "react-redux";

const ManageCity = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  
  const [allCategories, setAllCategories] = useState([]);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  const getCatgories = async () => {
    const catRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/Test/HomeTutors/Cities.json"
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

  const deleteCatHandler = (cityId) => {
    deleteCategory(cityId);
  };

  const deleteCategory = async (cityId) => {
    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("cityId", cityId);

    const res = await fetch(`${localUrl}/admin/delete-home-tutor-city`, {
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
        <span className={styles["subject-header-title"]}>Manage Servicable City ( Home Tutor)</span>
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
            key={item.cityId}
            name={item.city}
            ondelete={deleteCatHandler.bind(this, item.cityId)}
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

export default ManageCity;
