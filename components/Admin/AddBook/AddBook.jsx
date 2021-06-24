import { useState } from "react";
import styles from "./AddBook.module.css";
import BookInfo from "./BookInfo/BookInfo";
import UploadBook from "./UploadBook/UploadBook";

const AddBook = (props) => {
  const [isInfoAdded, setIsInfoAdded] = useState(false);
  const [bookId, setBookId] = useState("");

  const infoAddedHandler = (bookId) => {
    setIsInfoAdded(true);
    setBookId(bookId);
  };

  return (
    <div className={styles["add-book"]}>
      {!isInfoAdded && <BookInfo onInfoAdded={infoAddedHandler} />}
      {isInfoAdded && <UploadBook bookId={bookId} />}
    </div>
  );
};

export default AddBook;
