import styles from "./BookItem.module.css";
import { localUrl, baseUrl } from "../../../../../constants/urls";
import { useSelector } from "react-redux";

const BookItem = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);

  const deleteBookHandler = async () => {
    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append('bookId',props.bookId);

    const res = await fetch(`${baseUrl}/admin/delete-book`,{
        method : "POST",
        body : formData
    });
    const data = await res.json();
    console.log(data);
    props.getBooks();
  }

  return (
    <div className={styles["card"]}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${props.coverUrl})` }}
      ></div>
      <div className={styles["text-container"]}>
        <span className={styles["title"]}>{props.title}</span>
        <span>{props.author}</span>
        <span className={styles["price"]}>Rs. {props.price}</span>
        <span>{props.subject}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["delete-button"]} onClick={deleteBookHandler}>
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default BookItem;