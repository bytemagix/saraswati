import { useDispatch, useSelector } from "react-redux";
import FilterButton from "../../UI/FilterButton";
import styles from "./FilterBooks.module.css";
import { booksActions } from "../../../store/reducers/book-reducer";

const FilterBooks = (props) => {
  const subjects = useSelector((state) => state.bookReducer.subjects);
  const classes = useSelector((state) => state.bookReducer.classes);

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

  const onChangeStandardHandler = (id , isSelected) => {
    let type;
    if(isSelected){
        type = 'REMOVE_FILTER';
    }else{
        type = 'ADD_FILTER'
    }
    console.log(isSelected);
    dispatch(booksActions.toogleClass({id : id, type : type}));
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["subjects"]}>
        <div className={styles["subjects__header"]}>Subjects</div>
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
      <hr />
      <div className={styles["standards"]}>
        <div className={styles["standards__header"]}>Standards</div>
        <div className={styles["standards__items"]}>
          {classes.map((item) => (
            <FilterButton
              key={item.classId}
              title={item.title}
              selected={item.selected}
              onClick={onChangeStandardHandler.bind(this, item.classId, item.selected)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;
