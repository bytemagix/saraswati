import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";
import styles from "./Books.module.css";
import Card from "../../../Utils/UI/Card/Card";

const Books = (props) => {
  const books = useSelector((state) => state.bookSlice.filteredBooks);

  return (
    <div className={styles["grid"]}>
      {books.map((item) => (
        <BookItem
          key={item.bookId}
          bookId={item.bookId}
          title={item.title}
          price={item.price}
          author={item.author}
          image={item.coverUrl}
          stdId={item.stdId}
        />
      ))}

      {books.length === 0 && (
        <div className={styles["no-books"]}>
          <Card>
            <p>
              Sorry !!! No Study Materials Available Right Now. Will be Available Soon.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Books;
