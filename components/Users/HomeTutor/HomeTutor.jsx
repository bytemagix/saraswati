import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeTutor.module.css";
import TeacherProfile from "./TeacherProfile/TeacherProfile";
import { homeTutorActions } from "../../../store/slices/home-tutor-slice";
import Card from "../../Utils/UI/Card/Card";
import WhiteCircleLoader from "../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const HomeTutor = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const tutorList = useSelector((state) => state.homeTutorSlice.homeTutors);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/teachers/profiles.json"
    );
    const data = await res.json();

    let homeTutors = [];
    for (const key in data) {
      const tutor = data[key];
      homeTutors.push(tutor);
    }

    dispatch(homeTutorActions.setHomeTutors(homeTutors));
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading && (
        <>
          <div className={styles["grid"]}>
            {tutorList.map((item) => (
              <TeacherProfile
                key={item.teacherId}
                teacherId={item.teacherId}
                name={item.name}
                qualification={item.qualification}
                experience={item.experience}
                subjects={item.subjects}
                image={item.imageUrl}
              />
            ))}
          </div>

          {tutorList.length === 0 && (
            <div className={styles["no-tutors"]}>
              <Card>
                <p>
                  Sorry !!! No Tutor Available Right Now. Will be Available Soon
                </p>
              </Card>
            </div>
          )}
        </>
      )}

      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
      <div className={styles["background"]}></div>
    </>
  );
};

export default HomeTutor;