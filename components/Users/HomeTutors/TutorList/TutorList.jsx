import styles from "./TutorList.module.css";
import { useState, useEffect } from "react";
import { localUrl } from "../../../../constants/urls";
import TutorItem from "./TutorItem/TutorItem";
import Card from "../../../Utils/UI/Card/Card";

const TutorList = (props) => {
  const [tutorList, setTutorList] = useState([]);

  const fetchTutorList = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Profiles.json"
    );
    const data = await res.json();
    console.log(data);

    let tutors = [];
    for (const key in data) {
      const tutor = data[key];
      tutors.push(tutor);
    }
    setTutorList(tutors);
  };

  useEffect(() => {
    fetchTutorList();
  }, []);

  return (
    <div className={styles['container']}>
      <div className={styles["grid"]}>
        {tutorList.map((item) => (
          <TutorItem
            key={item.tutorId}
            tutorName={item.tutorName}
            tutorQualification={item.tutorQualification}
            courses={item.Courses}
            tutorProfilePhotoUrl={item.tutorProfilePhotoUrl}
          />
        ))}
      </div>
      
      {tutorList.length === 0 && (
          <div className={styles["no-tutors"]}>
            <Card>
              <p>
                Sorry !!! No Tutor Available Right Now. Will be Available Soon.
              </p>
            </Card>
          </div>
        )}
    </div>
  );
};

export default TutorList;
