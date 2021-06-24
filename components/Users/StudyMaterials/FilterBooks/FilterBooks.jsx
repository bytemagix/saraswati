import { useDispatch, useSelector } from "react-redux";
import FilterButton from "../../../Utils/UI/FilterButton";
import styles from "./FilterBooks.module.css";
import { booksActions } from "../../../../store/slices/book-slice";

const FilterBooks = (props) => {
  const subjects = useSelector((state) => state.bookSlice.subjects);
  const dispatch = useDispatch();

  const onChangeSubjectHandler = (id, isSelected) => {
    let type;
    if(isSelected){
        type = 'REMOVE_FILTER';
    }else{
        type = 'ADD_FILTER'
    }
    console.log(isSelected);
    dispatch(booksActions.toogleSubject({id : id, type : type}));
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["subjects"]}>
        <div className={styles["filter-header"]}>Subjects</div>
        <div className={styles["subjects__items"]}>
          {subjects.map((item) => (
            <FilterButton
              key={item.subId}
              title={item.title}
              selected={item.selected}
              onClick={onChangeSubjectHandler.bind(this, item.subId, item.selected)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;
