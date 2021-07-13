import { useDispatch, useSelector } from "react-redux";
import FilterButton from "../../../Utils/UI/FilterButton";
import styles from "./FilterBooks.module.css";
import { booksActions } from "../../../../store/slices/book-slice";

const FilterBooks = (props) => {
  const categories = useSelector((state) => state.bookSlice.categories);
  const dispatch = useDispatch();

  const onCategoryChangeHandler = (id, isSelected) => {
    let type;
    if(isSelected){
        type = 'REMOVE_FILTER';
    }else{
        type = 'ADD_FILTER'
    }
    console.log(isSelected);
    dispatch(booksActions.toogleCategory({id : id, type : type}));
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["subjects"]}>
        <div className={styles["filter-header"]}>Categories</div>
        <div className={styles["subjects__items"]}>
          {categories.map((item) => (
            <FilterButton
              key={item.catId}
              title={item.title}
              selected={item.selected}
              onClick={onCategoryChangeHandler.bind(this, item.catId, item.selected)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;