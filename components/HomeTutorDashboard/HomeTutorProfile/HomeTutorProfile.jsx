import styles from "./HomeTutorProfile.module.css";
import AddProfile from "./AddProfile/AddProfile";
import ViewProfile from "./ViewProfile/ViewProfile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WhiteCircleLoader from "../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const HomeTutorProfile = props => {
  const auth = useSelector(state => state.homeTutorUserSlice.authInfo);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({});

  const fetchData = async () => {
    const res = await fetch(
      `https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Profiles/${auth.localId}.json`
    );
    const data = await res.json();
    console.log(data);
    if (data) {
      setProfileData(data);
    } else {
      setIsEditMode(true);
    }
    setIsLoading(false);
  };

  const editProfileHandler = () => {
    setIsEditMode(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
      <div className={styles["profile"]}>
        {!isEditMode && !isLoading && (
          <div className={styles["view-profile"]}>
            <ViewProfile data={profileData} onEdit={editProfileHandler} />
          </div>
        )}

        {isEditMode && !isLoading && (
          <div className={styles["form"]}>
            <AddProfile />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeTutorProfile;
