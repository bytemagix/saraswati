import styles from "./HomeTutors.module.css";
import TutorList from "./TutorList/TutorList";
import BookTutorForm from "./BookTutorForm/BookTutorForm";
import FormSection from "./FormSection/FormSection";

const HomeTutors = props => {
  return (
    <>
      <div className={styles["home-tutors"]}>
      <div className={styles['header']}><span className={styles['header-title']}>Our Expert Tutors</span></div>
        <div className={styles['tutor-list']}>
          <TutorList />
        </div>
        <div>
          <FormSection />
        </div>
      </div>
    </>
  );
};

export default HomeTutors;