import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "./Books/Books";
import Checkout from "./Checkout/Checkout";
import FilterBooks from "./FilterBooks/FilterBooks";
import styles from "./StudyMaterials.module.css";
import { booksActions } from "../../../store/slices/book-slice";

const StudyMaterials = (props) => {
  const dispatch = useDispatch();

  const isCheckoutOpen = useSelector(
    (state) => state.userSlice.isCheckoutModalOpen
  );

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const subRes = await fetch('https://saraswati-45e10-default-rtdb.firebaseio.com/subjects.json');
    const subData = await subRes.json();

    let subjects = [];
    for(const key in subData){
      const sub = {...subData[key],selected : false}
      subjects.push(sub);
    }
    dispatch(booksActions.setSubjects(subjects));

        // BookS
    const bookRes = await fetch('https://saraswati-45e10-default-rtdb.firebaseio.com/books.json');
    const bookData = await bookRes.json();
    console.log(bookData);

    let books = [];

    for(const key in bookData){
      const book = bookData[key].bookInfo;
      books.push(book);
    }

    dispatch(booksActions.setBooks(books))
  }

  return (
    <div className={styles["study"]}>
      <FilterBooks />
      <Books />
      {isCheckoutOpen && (
        <div className={styles["checkout"]}>
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
