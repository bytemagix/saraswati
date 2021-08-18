import styles from "./AddProfile.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { localUrl, baseUrl } from "../../../../constants/urls";
import ButtonOrange from "../../../Utils/UI/Buttons/ButtonOrange/ButtonOrange";
import ButtonSubmit from "../../../Utils/UI/Buttons/ButtonSubmit/ButtonSubmit";
import ButtonClear from "../../../Utils/UI/Buttons/ButtonClear/ButtonClear";
import WhiteCircleLoader from "../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const AddProfile = (props) => {
  const auth = useSelector((state) => state.homeTutorUserSlice.authInfo);
  console.log(auth);

  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredQualification, setEnteredQualification] = useState("");

  const [choosenProfilePhoto, setChoosenProfilePhoto] = useState(null);
  const [successProfilePhoto, setSuccessProfilePhoto] = useState("");

  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredCatId, setEnteredCatId] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");

  const [categories, setCategories] = useState([]);

  const [subjectList, setSubjectList] = useState([]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobileNoChangeHandler = (event) => {
    setEnteredMobileNo(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const qualificationChangeHandler = (event) => {
    setEnteredQualification(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCatId(event.target.value);

    const category = categories.find(
      (item) => item.catId === event.target.value
    );
    setEnteredCategory(category.title);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const profilePhotoChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setChoosenProfilePhoto(event.target.files[0]);
  };

  const addSubjectHandler = () => {
    const sub = [
      ...subjectList,
      { subId: enteredCatId, title: enteredCategory },
    ];
    setSubjectList(sub);
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

    const res = await fetch(`${localUrl}/home-tutor/upload-dp`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.isUploaded) {
      setSuccessProfilePhoto("SuccessFully Uploaded");
      setProfilePhotoUrl(data.tutorProfilePhotoUrl);
    } else {
      setSuccessProfilePhoto("Error Uploading");
    }

    setIsLoading(false);
  };

  const addBookHandler = async (event) => {
    event.preventDefault();

    //Validate Data
    setIsLoading(true);

    const formData = new FormData();
    formData.append("tutorId", auth.localId);
    formData.append("tutorName", enteredName);
    formData.append("tutorMobileNo", enteredMobileNo);
    formData.append("tutorEmail", enteredEmail);
    formData.append("tutorQualification", enteredQualification);
    formData.append("tutorProfilePhotoUrl", profilePhotoUrl);
    formData.append("subjectList",JSON.stringify(subjectList));

    const res = await fetch(`${localUrl}/home-tutor/add-profile`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    resetFormHandler();
    setIsLoading(false);
  };

  const resetFormHandler = () => {
    setEnteredName("");
    setEnteredMobileNo("");
    setEnteredEmail("");
    setEnteredCategory("");
    setEnteredCatId("");
    setProfilePhotoUrl("");

    setChoosenProfilePhoto(null);
    setSuccessProfilePhoto("");
  };

  const fetchCategories = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json"
    );
    const data = await res.json();
    console.log(data);

    let categories = [];
    for (const key in data) {
      const cat = data[key];
      categories.push(cat);
    }
    setCategories(categories);

    if (categories.length !== 0) {
      setEnteredCatId(categories[0].catId);
      setEnteredCategory(categories[0].title);
    }
  };

  let selectOptions;
  selectOptions = categories.map((item) => {
    return (
      <option key={item.catId} value={item.catId}>
        {item.title}
      </option>
    );
  });

  useEffect(() => {
    fetchCategories();
  }, []);

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
          <form onSubmit={addBookHandler}>
            <InputBox2
              label="Name"
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />

            <InputBox2
              label="Mobile No"
              id="mobileNo"
              type="text"
              value={enteredMobileNo}
              onChange={mobileNoChangeHandler}
            />

            <InputBox2
              label="Email"
              id="email"
              type="text"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />

            <InputBox2
              label="Educational Qualification"
              id="education"
              type="text"
              value={enteredQualification}
              onChange={qualificationChangeHandler}
            />

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>Subjects</label>
              <div className={styles["select-box"]}>
                <select
                  onChange={categoryChangeHandler}
                  value={enteredCatId}
                  className={styles["form-control__select"]}
                >
                  {selectOptions}
                </select>
                <button
                  type="button"
                  className={styles["add-subject-btn"]}
                  onClick={addSubjectHandler}
                >
                  Add
                </button>
              </div>
              <div className={styles["subject-list"]}>
                {subjectList.map((item) => (
                  <p key={item.subId}>{item.title}</p>
                ))}
              </div>
            </div>

            <TextBox
              label="Description"
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
              </div>
            </div>

            <div className={styles["divider"]}>
              <hr />
            </div>

            <div className={styles["actions"]}>
              <div className={styles["clear"]}>
                <ButtonClear
                  type="button"
                  title="Clear"
                  onClick={resetFormHandler}
                />
              </div>
              <div className={styles["submit"]}>
                <ButtonSubmit type="submit" title="Add Book" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
    </div>
  );
};

export default AddProfile;
