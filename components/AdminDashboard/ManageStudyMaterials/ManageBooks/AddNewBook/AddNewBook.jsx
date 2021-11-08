import styles from "./AddNewBook.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../../Utils/UI/TextBox/TextBox";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { localUrl, baseUrl } from "../../../../../constants/urls";
import ButtonOrange from "../../../../Utils/UI/Buttons/ButtonOrange/ButtonOrange";
import ButtonSubmit from "../../../../Utils/UI/Buttons/ButtonSubmit/ButtonSubmit";
import ButtonClear from "../../../../Utils/UI/Buttons/ButtonClear/ButtonClear";
import WhiteCircleLoader from "../../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const AddNewBook = (props) => {
  const auth = useSelector((state) => state.adminSlice.authInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredCatId, setEnteredCatId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [bookUrl, setBookUrl] = useState("");

  const [choosenCoverFile, setChoosenCoverFile] = useState(null);
  const [successCoverFile, setSuccessCoverFile] = useState("");

  const [choosenBookFile, setChoosenBookFile] = useState(null);
  const [successBookFile, setSuccessBookFile] = useState("");

  const [categories, setCategories] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCatId(event.target.value);

    const category = categories.find((item) => item.catId === event.target.value);
    setEnteredCategory(category.title);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const coverPhotoChangeHandler = (event) => {
    setChoosenCoverFile(event.target.files[0]);
  };

  const bookFileChangeHandler = (event) => {
    setChoosenBookFile(event.target.files[0]);
  };

  const uploadCoverPhotoHandler = async () => {
    if (!choosenCoverFile) {
      setSuccessCoverFile("Error Uploading");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("file", choosenCoverFile);

    const res = await fetch(`${baseUrl}/admin/upload-book-cover`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.isUploaded) {
      setSuccessCoverFile("SuccessFully Uploaded");
      setCoverUrl(data.coverUrl);
    } else {
      setSuccessCoverFile("Error Uploading");
    }

    setIsLoading(false);
  };

  const uploadBookHandler = async () => {
    if (!choosenBookFile) {
      setSuccessBookFile("Error Uploading");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("file", choosenBookFile);

    const res = await fetch(`${baseUrl}/admin/upload-book`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.isUploaded) {
      setSuccessBookFile("SuccessFully Uploaded");
      setBookUrl(data.bookUrl);
    } else {
      setSuccessBookFile("Error Uploading");
    }

    setIsLoading(false);
  };

  const addBookHandler = async (event) => {
    event.preventDefault();

    //Validate Data
    if (enteredTitle.length === 0) {
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("title", enteredTitle);
    formData.append("author", enteredAuthor);
    formData.append("catId", enteredCatId);
    formData.append("category", enteredCategory);
    formData.append("price", enteredPrice);
    formData.append("description", enteredDescription);
    formData.append("coverUrl", coverUrl);
    formData.append("bookUrl", bookUrl);

    const res = await fetch(`${baseUrl}/admin/add-book`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    resetFormHandler();
    setIsLoading(false);
  };

  const resetFormHandler = () => {
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredCategory("");
    setEnteredCatId("");
    setEnteredPrice("");
    setEnteredDescription("");
    setCoverUrl("");
    setBookUrl("");

    setChoosenCoverFile(null);
    setSuccessCoverFile("");

    setChoosenBookFile(null);
    setSuccessBookFile("");
  };

  const fetchCategories = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/StudyMaterials/Categories.json"
    );
    const data = await res.json();

    let categories = [];
    for (const key in data) {
      const cat = data[key];
      categories.push(cat);
    }
    setCategories(categories);
    
    if(categories.length !== 0){
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
          <span className={styles["header-title"]}>Add New Book</span>
        </div>
        <div className={styles["divider"]}>
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
              <label className={styles["form-control__label"]}>
                Categories
              </label>
              <select
                onChange={categoryChangeHandler}
                value={enteredCatId}
                className={styles["form-control__select"]}
              >
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
                <div className={styles["upload-btn"]}>
                  <ButtonOrange
                    type="button"
                    title="Upload"
                    onClick={uploadCoverPhotoHandler}
                  />
                </div>
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
                <div className={styles["upload-btn"]}>
                  <ButtonOrange
                    type="button"
                    title="Upload"
                    onClick={uploadBookHandler}
                  />
                </div>
              </div>
              <div>
                <span className={styles["upload-success-message"]}>
                  {successBookFile}
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

export default AddNewBook;
