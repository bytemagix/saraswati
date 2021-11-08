import { useEffect, useState } from "react";
import styles from "./HomeTutorBookings.module.css";
import BookingItem from "./BookingItem/BookingItem";

const HomeTutorBookings = (props) => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Bookings.json"
    );
    const data = await res.json();

    let list = [];
    for (const key in data) {
      const book = data[key];
      list.push(book);
    }

    setBookings(list);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <div className={styles['header']}>
        <span className={styles['header-title']}>Home Tutor Bookings</span>
      </div>
      <div className={styles["grid"]}>
        {bookings.map((item) => (
          <BookingItem
            key={item.bookingId}
            bookingId={item.bookingId}
            name={item.studentName}
            mobileNo={item.studentMobileNo}
            email={item.studentEmailId}
            subject={item.subject}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTutorBookings;
