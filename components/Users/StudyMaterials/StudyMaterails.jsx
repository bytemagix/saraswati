import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "./Books/Books";
import Checkout from "./Checkout/Checkout";
import FilterBooks from "./FilterBooks/FilterBooks";
import styles from "./StudyMaterials.module.css";
import { booksActions } from "../../../store/slices/book-slice";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const StudyMaterials = (props) => {
  const dispatch = useDispatch();

  const isCheckoutOpen = useSelector(
    (state) => state.userSlice.isCheckoutModalOpen
  );

  useEffect(() => {
    fetchData();

    // Toogle Body Scroll
    const checkOutBody = document.querySelector("#checkoutbody");
    if (isCheckoutOpen) {
      disableBodyScroll(checkOutBody);
    } else {
      enableBodyScroll(checkOutBody);
    }
  }, [isCheckoutOpen]);

  const fetchData = async () => {
    const catRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json"
    );
    const catData = await catRes.json();

    let categories = [];
    for (const key in catData) {
      const cat = { ...catData[key], selected: false };
      categories.push(cat);
    }
    dispatch(booksActions.setCategories(categories));

    // BookS
    const bookRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Ebooks.json"
    );
    const bookData = await bookRes.json();
    console.log(bookData);

    let books = [];

    for (const key in bookData) {
      const book = bookData[key].BookInfo;
      books.push(book);
    }

    dispatch(booksActions.setBooks(books));
  };

  return (
    <>
      <div className={styles["study"]} id="checkoutbody">
        <FilterBooks />
        <Books />
        {isCheckoutOpen && (
          <div className={styles["checkout"]}>
            <Checkout />
          </div>
        )}
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default StudyMaterials;