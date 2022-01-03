import styles from "./BookingItem.module.scss";
import NavLink from "next/link";

const BookingItem = (props) => {
  const link = `/admin/home-tutor-bookings/${props.bookingId}`;

  return (
    <div className={styles["card"]}>
      <div className={styles["info"]}>
        <span>{props.name}</span>
        <span>{props.mobileNo}</span>
        <span>{props.email}</span>
        <span>{props.subject}</span>
      </div>
      <div className={styles["actions"]}>
        <span className={styles["view-btn"]}>
          <NavLink href={link}>View</NavLink>
        </span>
      </div>
    </div>
  );
};

export default BookingItem;