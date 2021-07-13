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
    const catRes = await fetch('https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json');
    const catData = await catRes.json();

    let categories = [];
    for(const key in catData){
      const cat = {...catData[key],selected : false}
      categories.push(cat);
    }
    dispatch(booksActions.setCategories(categories));

        // BookS
    const bookRes = await fetch('https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Ebooks.json');
    const bookData = await bookRes.json();
    console.log(bookData);

    let books = [];

    for(const key in bookData){
      const book = bookData[key].BookInfo;
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
