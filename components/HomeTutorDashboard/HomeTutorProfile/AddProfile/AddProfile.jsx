import styles from "./AddProfile.module.css";
import InputBox4 from "../../../Utils/UI/InputBox4/InputBox4";
import TextBox2 from "../../../Utils/UI/TextBox2/TextBox2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { localUrl, baseUrl } from "../../../../constants/urls";
import ButtonOrange from "../../../Utils/UI/Buttons/ButtonOrange/ButtonOrange";
import BlueCircleLoader from "../../../Utils/UI/BlueCircleLoader/BlueCircleLoader";

const AddProfile = (props) => {
  const auth = useSelector((state) => state.homeTutorUserSlice.authInfo);
  console.log(auth);

  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [isMobileTouched, setIsMobileTouched] = useState(false);
  const [isMobileNoError, setIsMobileNoError] = useState(false);
  const [mobileNoErrorMsg, setMobileNoErrorMsg] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredQualification, setEnteredQualification] = useState("");
  const [isQualificationTouched, setIsQualificationTouched] = useState(false);
  const [isQualificationError, setIsQualificationError] = useState(false);
  const [qualificationErrorMsg, setQualificationErrorMsg] = useState("");

  const [enteredExperience, setEnteredExperience] = useState("");
  const [isExperienceTouched, setIsExperienceTouched] = useState(false);
  const [isExperienceError, setIsExperienceError] = useState(false);
  const [experienceErrorMsg, setExperienceErrorMsg] = useState("");

  const [choosenProfilePhoto, setChoosenProfilePhoto] = useState(null);
  const [successProfilePhoto, setSuccessProfilePhoto] = useState("");

  const [enteredDescription, setEnteredDescription] = useState("");

  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [isProfileProtoUpload, setIsProfileProtoUpload] = useState(false);
  const [photoUploadError, setPhotoUploadError] = useState(false);


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

  const mobileNoChangeHandler = (event) => {
    const val = event.target.value;

    setIsMobileTouched(true);
    setEnteredMobileNo(val);

    if (isMobileTouched && val.length === 0) {
      setIsMobileNoError(true);
      setMobileNoErrorMsg("Mobile No field can not be empty");
    } else {
      setIsMobileNoError(false);
      setMobileNoErrorMsg("");
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
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

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const profilePhotoChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setChoosenProfilePhoto(event.target.files[0]);
  };

  const uploadProfilePhotoHandler = async () => {
    if (!choosenProfilePhoto) {
      setSuccessProfilePhoto("Error Uploading");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("tutorId", auth.localId);
    formData.append("file", choosenProfilePhoto);

    const res = await fetch(`${baseUrl}/home-tutor/upload-dp`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.isUploaded) {
      setSuccessProfilePhoto("SuccessFully Uploaded");
      setProfilePhotoUrl(data.tutorProfilePhotoUrl);
      setPhotoUploadError(false);
      setIsProfileProtoUpload(true);
    } else {
      setSuccessProfilePhoto("Error Uploading");
      setIsProfileProtoUpload(false);
    }

    setIsLoading(false);
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

    if (isMobileNoError || enteredMobileNo.length === 0) {
      setIsMobileNoError(true);
      setMobileNoErrorMsg("Mobile No field can not be empty");
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

    if (!isProfileProtoUpload) {
      setPhotoUploadError(true);
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("tutorId", auth.localId);
    formData.append("tutorName", enteredName);
    formData.append("tutorMobileNo", enteredMobileNo);
    formData.append("tutorEmail", enteredEmail);
    formData.append("tutorQualification", enteredQualification);
    formData.append("tutorExperience", enteredExperience);
    formData.append("tutorProfilePhotoUrl", profilePhotoUrl);

    const res = await fetch(`${baseUrl}/home-tutor/add-profile`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    resetFormHandler();
    setIsLoading(false);
    props.onSuccess();
  };

  const resetFormHandler = () => {
    setEnteredName("");
    setEnteredMobileNo("");
    setEnteredEmail("");
    setEnteredQualification("");
    setEnteredExperience("");
    setProfilePhotoUrl("");

    setChoosenProfilePhoto(null);
    setSuccessProfilePhoto("");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["add-book"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>
            Add Profile Information
          </span>
        </div>
        <div className={styles["divider"]}>
          <hr />
        </div>
        <div>
          <InputBox4
            label="Name"
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            hasError={isNameError}
            errorMsg={nameErrorMsg}
          />

          <InputBox4
            label="Mobile No"
            id="mobileNo"
            type="text"
            value={enteredMobileNo}
            onChange={mobileNoChangeHandler}
            hasError={isMobileNoError}
            errorMsg={mobileNoErrorMsg}
          />

          <InputBox4
            label="Email"
            id="email"
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />

          <InputBox4
            label="Educational Qualification"
            id="education"
            type="text"
            value={enteredQualification}
            onChange={qualificationChangeHandler}
            hasError={isQualificationError}
            errorMsg={qualificationErrorMsg}
          />

          <InputBox4
            label="Experience ( In Years)"
            id="experience"
            type="text"
            value={enteredExperience}
            onChange={experienceChangeHandler}
            hasError={isExperienceError}
            errorMsg={experienceErrorMsg}
          />

          <TextBox2
            label="About Me"
            id="description"
            type="text"
            rows="4"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />

          <div className={styles["upload-file"]}>
            <div className={styles["upload-file-title"]}>
              <span>Upload Profile Photo</span>
            </div>
            <div className={styles["upload-file-inputbox"]}>
              <input type="file" onChange={profilePhotoChangeHandler} />
              <div className={styles["upload-btn"]}>
                <ButtonOrange
                  type="button"
                  title="Upload"
                  onClick={uploadProfilePhotoHandler}
                />
              </div>
            </div>
            <div>
              <span className={styles["upload-successProfilePhoto-message"]}>
                {successProfilePhoto}
              </span>
              {photoUploadError && (
                <span className={styles["not-uploaded-msg"]}>
                  Profile Photo Not Uploaded
                </span>
              )}
            </div>
          </div>

          <div className={styles["divider"]}>
            <hr />
          </div>

          <div className={styles["actions"]}>
            <span className={styles["clear-btn"]} onClick={resetFormHandler}>
              Clear
            </span>
            <span className={styles["submit-btn"]} onClick={submitFormHandler}>
              Submit
            </span>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className={styles["loading"]}>
          <BlueCircleLoader />
        </div>
      )}
    </div>
  );
};

export default AddProfile;
