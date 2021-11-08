import { useEffect, useState } from "react";
import styles from "./HomeTutorProfiles.module.css";
import ProfileItem from "./ProfileItem/ProfileItem";

const HomeTutorProfiles = (props) => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Profiles.json"
    );
    const data = await res.json();

    let homeTutors = [];
    for (const key in data) {
      const tutor = data[key];
      homeTutors.push(tutor);
    }

    setProfiles(homeTutors);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className={styles["profile"]}>
      <div className={styles["header"]}>
        <span className={styles["header-title"]}>Profiles</span>
      </div>
      <div className={styles["grid"]}>
        {profiles.map((item) => (
          <ProfileItem
            key={item.tutorId}
            tutorId={item.tutorId}
            name={item.tutorName}
            mobileNo={item.tutorMobileNo}
            imageUrl={item.tutorProfilePhotoUrl}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTutorProfiles;
