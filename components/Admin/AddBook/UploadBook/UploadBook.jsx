import { useRef } from 'react';
import styles from './UploadBook.module.css';

const UploadBook = props => {

    const ebookRef = useRef();

    const uploadBookHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file',ebookRef.current.files[0]);
        formData.append('bookId',props.bookId);

        sendData(formData);
    }

    const sendData = async (formdata) => {
        const res = await fetch(
          "/api/uploadbook",
          {
            method : "POST",
            body : formdata
          }
        );
        const data = await res.json();
        console.log(data);
      };

    console.log(props.bookId);


    return (
        <div className={styles['upload-book']}>
            <h2 className={styles['header']}>Upload E-Book</h2>
            <hr />
            <form onSubmit={uploadBookHandler} className={styles["form-controls"]}>
                <div className={styles["form-control"]}>
                    <label className={styles["form-control__label"]}>Upload Book</label>
                    <input type="file" className={styles["form-control__input"]} ref={ebookRef} />
                </div>
                <div className={styles['form-actions']}>
                    <button type="submit" className={styles['button__submit']}>Upload</button>
                </div>
            </form>
        </div>
    );
}

export default UploadBook;