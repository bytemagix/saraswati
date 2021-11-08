import styles from "./PreviewProfile.module.scss";
import InputBox4 from "../../../../Utils/UI/InputBox4/InputBox4";
import TutorItem from "./TutorItem/TutorItem";
import { useState } from "react";
import { baseUrl, localUrl } from "../../../../../constants/urls";
import BlueCircleLoader from "../../../../Utils/UI/BlueCircleLoader/BlueCircleLoader";

const PreviewProfile = (props) => {
  const profileData = props.profileData;

  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState(profileData.displayName);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const [enteredQualification, setEnteredQualification] = useState(
    profileData.displayQualification
  );
  const [isQualificationTouched, setIsQualificationTouched] = useState(false);
  const [isQualificationError, setIsQualificationError] = useState(false);
  const [qualificationErrorMsg, setQualificationErrorMsg] = useState("");

  const [enteredExperience, setEnteredExperience] = useState(
    profileData.displayExperience
  );
  const [isExperienceTouched, setIsExperienceTouched] = useState(false);
  const [isExperienceError, setIsExperienceError] = useState(false);
  const [experienceErrorMsg, setExperienceErrorMsg] = useState("");

  const [enteredSubject, setEnteredSubject] = useState(
    profileData.displaySubject
  );
  const [isSubjectTouched, setIsSubjectTouched] = useState(false);
  const [isSubjectError, setIsSubjectError] = useState(false);
  const [subjectErrorMsg, setSubjectErrorMsg] = useState("");

  const nameChangeHandler = (event) => {
    const val = event.target.value;

    setIsNameTouched(true);
    setEnteredName(val);

    if (isNameTouched && val.length === 0) {
      setIsNameError(true);
      setNameErrorMsg("Name field can not be empty");
    } else {
      setIsNameError(false);
      setNameErrorMsg("");
    }
  };

  const qualificationChangeHandler = (event) => {
    const val = event.target.value;

    setIsQualificationTouched(true);
    setEnteredQualification(val);

    if (isQualificationTouched && val.length === 0) {
      setIsQualificationError(true);
      setQualificationErrorMsg("Qualification field can not be empty");
    } else {
      setIsQualificationError(false);
      setQualificationErrorMsg("");
    }
  };

  const experienceChangeHandler = (event) => {
    const val = event.target.value;

    setIsExperienceTouched(true);
    setEnteredExperience(val);

    if (isExperienceTouched && val.length === 0) {
      setIsExperienceError(true);
      setExperienceErrorMsg("Experience field can not be empty");
    } else {
      setIsExperienceError(false);
      setExperienceErrorMsg("");
    }
  };

  const subjectChangeHandler = (event) => {
    const val = event.target.value;

    setIsSubjectTouched(true);
    setEnteredSubject(val);

    if (isSubjectTouched && val.length === 0) {
      setIsSubjectError(true);
      setSubjectErrorMsg("Subject field can not be empty");
    } else {
      setIsSubjectError(false);
      setSubjectErrorMsg("");
    }
  };

  const submitFormHandler = async () => {
    setIsLoading(true);

    //Validate Data
    if (isNameError || enteredName.length === 0) {
      setIsNameError(true);
      setNameErrorMsg("Name field can not be empty");
      setIsLoading(false);
      return;
    }

    if (isQualificationError || enteredQualification.length === 0) {
      setIsQualificationError(true);
      setQualificationErrorMsg("Qualification field can not be empty");
      setIsLoading(false);
      return;
    }

    if (isExperienceError || enteredExperience.length === 0) {
      setIsExperienceError(true);
      setExperienceErrorMsg("Experience field can not be empty");
      setIsLoading(false);
      return;
    }

    if (isSubjectError || enteredSubject.length === 0) {
      setIsSubjectError(true);
      setSubjectErrorMsg("Subject field can not be empty");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("tutorId", profileData.tutorId);
    formData.append("displayName", enteredName);
    formData.append("displayQualification", enteredQualification);
    formData.append("displayExperience", enteredExperience);
    formData.append("displaySubject", enteredSubject);

    const res = await fetch(`${baseUrl}/admin/update-home-tutor-info`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setIsLoading(false);
    props.reloadPage();
  };

  return (
    <div className={styles["preview"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Preview</span>
          <div>
            <hr />
          </div>
        </div>
        <div className={styles["contents"]}>
          <div className={styles["left"]}>
            <TutorItem
              displayName={profileData.displayName}
              displayQualification={profileData.displayQualification}
              displaySubject={profileData.displaySubject}
              tutorProfilePhotoUrl={profileData.tutorProfilePhotoUrl}
            />
          </div>
          <div className={styles["right"]}>
            <div className={styles["form"]}>
              <InputBox4
                type="text"
                id="display_name"
                label="Name"
                value={enteredName}
                onChange={nameChangeHandler}
                hasError={isNameError}
                errorMsg={nameErrorMsg}
              />
              <InputBox4
                type="text"
                id="display_qualification"
                label="Qualification"
                value={enteredQualification}
                onChange={qualificationChangeHandler}
                hasError={isQualificationError}
                errorMsg={qualificationErrorMsg}
              />
              <InputBox4
                type="text"
                id="display_experience"
                label="Experience"
                value={enteredExperience}
                onChange={experienceChangeHandler}
                hasError={isExperienceError}
                errorMsg={experienceErrorMsg}
              />

              <InputBox4
                type="text"
                id="display_subjects"
                label="Expert In ( Subjects )"
                value={enteredSubject}
                onChange={subjectChangeHandler}
                hasError={isSubjectError}
                errorMsg={subjectErrorMsg}
              />

              <div className={styles["actions"]}>
                <span
                  className={styles["update-btn"]}
                  onClick={submitFormHandler}
                >
                  Update
                </span>
              </div>

              {isLoading && (
                <div className={styles["loading"]}>
                  <BlueCircleLoader />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewProfile;
