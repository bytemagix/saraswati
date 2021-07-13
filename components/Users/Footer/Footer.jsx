import styles from "./Footer.module.css";
import ContactForm from "./ContactForm/ContactForm";
import AddressItem from "./AddressItem/AddressItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["main"]}>
        <div className={styles["contact-form"]}>
          <div className={styles["contact-header"]}>
            <span className={styles["header-title"]}>Enquiry</span>
          </div>
          <ContactForm />
        </div>

        <div className={styles["addresses"]}>
          <AddressItem
            header="Head Office"
            address="Meda Bhavan, City Public College, Behind MP Book Stall, Dr. R.P. Road, Dispur, 781006,"
            phoneNo="+91 6026719871"
            whatsapp="+91 8638115187"
            email=" saraswatitutorial.mld@gmail.com"
          />

          <br />
          <br />

          <AddressItem
            header="Branch Office"
            address="Civil Hospital Road, Mangaldai, Darrang, Assam"
            phoneNo="+91 6026719871"
            whatsapp="+91 8638115187"
            email=" saraswatitutorial.mld@gmail.com"
          />
        </div>
      </div>

      <div className={styles["bottom"]}>
        <div className={styles["social"]}>
          <span>
            {" "}
            <FontAwesomeIcon icon={faFacebook} className={styles["icon"]} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faInstagram} className={styles["icon"]} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faGoogle} className={styles["icon"]} />
          </span>
        </div>
        <p className={styles["copyright"]}>Saraswati Tutorials @ 2021</p>
      </div>
    </div>
  );
};

export default Footer;