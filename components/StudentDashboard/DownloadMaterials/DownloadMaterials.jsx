import styles from "./DownloadMaterials.module.css";
import DownloadItem from "./DownloadItem/DownloadItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../../../store/slices/user-slice";

const DownloadMaterials = (props) => {
  const downloadableBooks = useSelector(
    (state) => state.userSlice.downloadableBooks
  );

  const auth = useSelector((state) => state.userSlice.authInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Orders/${auth.localId}.json`
    );
    const data = await res.json();
    console.log(data);

    const books = [];

    for (const orderId in data) {
      for (const bookId in data[orderId]) {
        books.push(data[orderId][bookId]);
      }
    }

    dispatch(userActions.setDownloadableBooks(books));
  };

  return (
    <div className={styles["download-materials"]}>
      <div className={styles['header']}>
        <span className={styles['header-title']}>Downloadable Study Materials</span>
        <hr />
      </div>
      <div className={styles['grid']}>
        {downloadableBooks.map((item) => (
          <DownloadItem
            key={item.bookingId}
            imageUrl={item.imageUrl}
            title={item.title}
            author={item.author}
            downloadUrl={item.downnloadUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default DownloadMaterials;
