import styles from "./ClassroomCourses.module.css";
import AddressItem from "./AddressItem/AddressItem";
import { FaAward } from "react-icons/fa";

const ClassroomCourses = (props) => {
  return (
    <>
      <div className={styles["classroom-courses"]}>
        <div className={styles["card"]}>
          <div className={styles["section"]}>
            <div className={styles["header"]}>
              <span className={styles["header-title"]}>Our Courses</span>
            </div>
            <hr />
            <div>
              <div>
                <p>We Offer following courses in our Coaching Centres</p>
              </div>

              <ul className={styles["course-items"]}>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>2 years Coaching for NEET/JEE</span>
                </li>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>1 year Coaching for NEET/JEE</span>
                </li>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>Crash Course for NEET/JEE</span>
                </li>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>Tutorial Classes for Class VI-X (SEBA/CBSE)</span>
                </li>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>
                    Tutorial Classes for Class XI-XII (Arts/ Commerce/Science)
                  </span>
                </li>
                <li className={styles["course-item"]}>
                  <FaAward />
                  <span>Coaching for SSC, BANKING, RAILWAY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles["section"]}>
            <div className={styles["header"]}>
              <span className={styles["header-title"]}>Our Locations</span>
            </div>
            <hr />
            <div>
              <div>
                <p>Visit our Coaching centres on following locations</p>
              </div>

              <div className={styles["addresses"]}>
                <AddressItem
                  header="Guwahati Centre"
                  address="Meda Bhavan, City Public College, Behind MP Book Stall, Dr. R.P. Road, Dispur, 781006,"
                  phoneNo="+91 6026719871"
                  whatsapp="+91 8638115187"
                  email=" saraswatitutorial.mld@gmail.com"
                />

                <br />
                <br />

                <AddressItem
                  header="Mangaldai Centre"
                  address="Civil Hospital Road, Mangaldai, Darrang, Assam"
                  phoneNo="+91 6026719871"
                  whatsapp="+91 8638115187"
                  email=" saraswatitutorial.mld@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["background"]}></div>
    </>
  );
};

export default ClassroomCourses;
