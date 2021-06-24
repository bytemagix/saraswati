import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookInfo.module.css";
import { adminActions } from '../../../../store/reducers/admin-reducer';

const BookInfo = (props) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const subjectRef = useRef();
  const coverRef = useRef();

  const [isSending, setIsSending] = useState(false);

  const dispatch = useDispatch();

  const subjects = useSelector((state) => state.adminReducer.subjects);

  const [selectedSubject, setSelectedSubject] = useState("");

  const selectChangeHandler = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Fetch Subjects
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/subjects.json"
    );
    const data = await res.json();
    console.log(data);

    let subjects = [];
    for (const key in data) {
      const sub = data[key];
      subjects.push(sub);
    }
    dispatch(adminActions.setSubjects(subjects));
  };

  let selectOptions;
  selectOptions = subjects.map((item) => (
    <option key={item.subId} value={item.subId}>
      {item.title}
    </option>
  ));

  const addBookHandler = (event) => {
    event.preventDefault();

    setIsSending(true);

    const subjectTitle = subjects.find(
      (item) => item.subId === selectedSubject
    );

    if(titleRef.current.value.length === 0){
      setIsSending(false);
      return;
    }

    if(!subjectTitle){
      alert('Select Subject');
      setIsSending(false);
      return;
    }

    console.log(subjectTitle);

    const formdata = new FormData();
    formdata.append("title", titleRef.current.value);
    formdata.append("author", authorRef.current.value);
    formdata.append("price", priceRef.current.value);
    formdata.append("description", descriptionRef.current.value);
    formdata.append("file", coverRef.current.files[0]);
    formdata.append("subId", selectedSubject);
    formdata.append("subject", subjectTitle.title);

    sendData(formdata);
  };

  const sendData = async (formdata) => {
    const res = await fetch("/api/addbookinfo", {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    console.log(data);
    props.onInfoAdded(data.bookId);
    setIsSending(false);
  };

  return (
    <div className={styles["book-info"]}>
      <div>
        <h2 className={styles["header"]}>Add Book</h2>
        <hr />
        <form
          onSubmit={addBookHandler}
          className={styles["form-controls"]}
          encType="multipart/form-data"
        >
          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Title</label>
            <input
              type="text"
              className={styles["form-control__input"]}
              ref={titleRef}
            />
          </div>
          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Author</label>
            <input
              type="text"
              className={styles["form-control__input"]}
              ref={authorRef}
            />
          </div>
          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Price</label>
            <input
              type="text"
              className={styles["form-control__input"]}
              ref={priceRef}
            />
          </div>
          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Description</label>
            <input
              type="text"
              className={styles["form-control__input"]}
              ref={descriptionRef}
            />
          </div>

          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Subject</label>
            <select onChange={selectChangeHandler} value={selectedSubject}>
              {selectOptions}
            </select>
          </div>

          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Cover Photo</label>
            <input
              type="file"
              className={styles["form-control__input"]}
              ref={coverRef}
            />
          </div>
          <div className={styles["form-actions"]}>
            {!isSending && (
              <button type="submit" className={styles["add-book__button"]}>
                Add Book Info
              </button>
            )}
            {isSending && (
              <div className={styles["spinner"]}>
                <div className={styles["loader"]}></div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookInfo;
