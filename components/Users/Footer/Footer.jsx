import styles from "./Footer.module.css";
import Contact from "./Contact/Contact";
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
          <Contact />
        </div>
        <div className={styles["info"]}>
          <span className={styles['office-address-header']}>Office Address</span>
          <span style={styles['office-address-line']}>Line 1</span>
          <span>Line 2</span>
          <span>Line 3</span>
          <span>Phone No</span>
          <span>Email Id</span>
        </div>
      </div>

      <div className={styles["bottom"]}>
        <div className={styles["social"]}>
          <span> <FontAwesomeIcon icon={faFacebook}  className={styles["icon"]} /></span>
          <span> <FontAwesomeIcon icon={faInstagram} className={styles["icon"]} /></span>
          <span> <FontAwesomeIcon icon={faGoogle} className={styles["icon"]} /></span>
        </div>
        <p className={styles["copyright"]}>Saraswati Tutorials @ 2021</p>
      </div>
    </div>
  );
};

export default Footer;
