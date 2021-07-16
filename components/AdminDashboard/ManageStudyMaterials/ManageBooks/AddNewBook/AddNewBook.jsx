import styles from "./AddNewBook.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../../Utils/UI/TextBox/TextBox";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { localUrl, baseUrl } from "../../../../../constants/urls";
import ButtonOrange from "../../../../Utils/UI/Buttons/ButtonOrange/ButtonOrange";
import ButtonSubmit from "../../../../Utils/UI/Buttons/ButtonSubmit/ButtonSubmit";
import ButtonClear from "../../../../Utils/UI/Buttons/ButtonClear/ButtonClear";

const AddNewBook = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredSubId, setEnteredSubId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [bookUrl, setBookUrl] = useState("");

  const [choosenCoverFile, setChoosenCoverFile] = useState(null);
  const [successCoverFile, setSuccessCoverFile] = useState("");

  const [choosenBookFile, setChoosenBookFile] = useState(null);
  const [successBookFile, setSuccessBookFile] = useState("");

  const [subjects, setSubjects] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setEnteredSubId(event.target.value);

    const sub = subjects.find((item) => item.subId === event.target.value);
    setEnteredSubject(sub.title);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const coverPhotoChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setChoosenCoverFile(event.target.files[0]);
  };

  const bookFileChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setChoosenBookFile(event.target.files[0]);
  };

  const uploadCoverPhotoHandler = async () => {

    if(!choosenCoverFile){
      setSuccessCoverFile("Error Uploading");
      return;
    }

    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("file", choosenCoverFile);

    const res = await fetch(`${baseUrl}/admin/upload-book-cover`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.isUploaded) {
      setSuccessCoverFile("SuccessFully Uploaded");
      setCoverUrl(data.coverUrl);
    } else {
      setSuccessCoverFile("Error Uploading");
    }
  };

  const uploadBookHandler = async () => {
    if(!choosenBookFile){
      setSuccessBookFile("Error Uploading");
      return;
    }

    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("file", choosenBookFile);

    const res = await fetch(`${baseUrl}/admin/upload-book`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.isUploaded) {
      setSuccessBookFile("SuccessFully Uploaded");
      setBookUrl(data.bookUrl);
    } else {
      setSuccessBookFile("Error Uploading");
    }
  };

  const addBookHandler = async (event) => {
    event.preventDefault();

    //Validate Data
    if(enteredTitle.length === 0){
      return;
    }

    const formData = new FormData();
    formData.append('token', auth.token);
    formData.append("title", enteredTitle);
    formData.append("author", enteredAuthor);
    formData.append("subId", enteredSubId);
    formData.append("subject", enteredSubject);
    formData.append("price", enteredPrice);
    formData.append("description", enteredDescription);
    formData.append("coverUrl", coverUrl);
    formData.append("bookUrl", bookUrl);

    const res = await fetch(`${baseUrl}/admin/add-book`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    resetFormHandler();
  };

  const resetFormHandler = () => {
  setEnteredTitle("")
  setEnteredAuthor(""); 
  setEnteredSubject("");
  setEnteredSubId("");
  setEnteredPrice("");
  setEnteredDescription("");
  setCoverUrl("")
  setBookUrl("");
  
  setChoosenCoverFile(null);
  setSuccessCoverFile("");

  setChoosenBookFile(null);
  setSuccessBookFile("");
  };

  const fetchSubjects = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json"
    );
    const data = await res.json();
    console.log(data);

    let subjects = [];
    for (const key in data) {
      const sub = data[key];
      subjects.push(sub);
    }
    setSubjects(subjects);
  };

  let selectOptions;
  selectOptions = subjects.map((item) => {
    return (
      <option key={item.subId} value={item.subId}>
        {item.title}
      </option>
    );
  });

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className={styles["add-book"]}>
      <div className={styles['header']}>
        <span className={styles['header-title']}>Add New Book</span>
      </div>
      <div className={styles['divider']}>
        <hr />
      </div>
      <div>
        <form onSubmit={addBookHandler}>
          <InputBox2
            label="Title"
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />

          <InputBox2
            label="Author"
            id="author"
            type="text"
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />

          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Categories</label>
            <select onChange={subjectChangeHandler} value={enteredSubId} className={styles['form-control__select']}>
              {selectOptions}
            </select>
          </div>

          <InputBox2
            label="Price"
            id="price"
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />

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
              <span>Upload Cover Photo</span>
            </div>
            <div className={styles["upload-file-inputbox"]}>
              <input type="file" onChange={coverPhotoChangeHandler} />
              <ButtonOrange
                type="button"
                title="Upload"
                onClick={uploadCoverPhotoHandler}
              />
            </div>
            <div>
              <span className={styles["upload-success-message"]}>
                {successCoverFile}
              </span>
            </div>
          </div>

          <div className={styles["upload-file"]}>
            <div className={styles["upload-file-title"]}>
              <span>Upload Book</span>
            </div>
            <div className={styles["upload-file-inputbox"]}>
              <input type="file" onChange={bookFileChangeHandler} />
              <ButtonOrange
                type="button"
                title="Upload"
                onClick={uploadBookHandler}
              />
            </div>
            <div>
              <span className={styles["upload-success-message"]}>
                {successBookFile}
              </span>
            </div>
          </div>

          <div className={styles['divider']}>
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
  );
};

export default AddNewBook;