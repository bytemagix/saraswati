import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";
import styles from "./Books.module.css";

const Books = (props) => {
  const books = useSelector((state) => state.bookReducer.filteredBooks);

  return (
    <div className={styles['grid']}>
      {books.map((item) => (
        <BookItem
          key={item.bookId}
          title={item.title}
          price={item.price}
          author={item.author}
          image={item.image}
          stdId={item.stdId}
        />
      ))}
    </div>
  );
};

export default Books;
