import { useEffect, useState } from "react";
import { localUrl } from "../../../../constants/urls";
import styles from "./ManageBooks.module.css";
import NavLink from "next/link";
import BookItem from "./BookItem/BookItem";

const ManageBooks = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  const getBooks = async () => {
    const bookRes = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Ebooks.json"
    );
    const booksData = await bookRes.json();

    console.log(booksData);

    let books = [];

    for (const key in booksData) {
      const book = booksData[key].BookInfo;
      books.push(book);
    }

    setAllBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={styles["subjects"]}>
      <div className={styles["subject-header"]}>
        <span className={styles["subject-header-title"]}>Manage Books</span>
        <span className={styles["add-subject-btn"]}>
          <NavLink href="/admin/manage-study-materials/add-new-book">
            Add New
          </NavLink>
        </span>
      </div>
      <hr />
      <div className={styles["sub-grid"]}>
        {allBooks.map((item) => (
          <BookItem
            key={item.bookId}
            bookId={item.bookId}
            title={item.title}
            coverUrl={item.coverUrl}
            price={item.price}
            getBooks={getBooks}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageBooks;
