import styles from "./AddressItem.module.css";
import { FaMapMarker, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AddressItem = (props) => {
  return (
    <div className={styles["info"]}>
      <span className={styles["office-address-header"]}>{props.header}</span>
      <div className={styles["contact-box"]}>
        <FaMapMarker />
        <span className={styles["contact-item"]}>{props.address}</span>
      </div>
      <div className={styles["contact-box"]}>
        <FaPhone />
        <span className={styles["contact-item"]}>{props.phoneNo}</span>
      </div>
      <div className={styles["contact-box"]}>
        <FaWhatsapp />
        <span className={styles["contact-item"]}>{props.whatsapp}</span>
      </div>
      <div className={styles["contact-box"]}>
        <IoMdMail />
        <span className={styles["contact-item"]}>{props.email}</span>
      </div>
    </div>
  );
};

export default AddressItem;
