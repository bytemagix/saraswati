import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './AddCourse.module.css';

const AddCourse = props => {
    const titleRef = useRef();
    const subRef = useRef();
    const stdRef = useRef();
    const priceRef = useRef();

    const teacherId = useSelector(state => state.teacherAuthReducer.localId);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const subject = subRef.current.value;
        const std = stdRef.current.value;
        const price = priceRef.current.value;

        const formData = new FormData();
        formData.append('teacherId',teacherId);
        formData.append('title',title);
        formData.append('subject',subject);
        formData.append('std',std);
        formData.append("price",price);

        sendData(formData);
    }

    const sendData = async (formdata) => {
        const res = await fetch('/api/addcourse',{
            method : "POST",
            body : formdata,
        });

        const data = await res.json();
        console.log(data);
    }

    return (
        <div className={styles['add-course']}>
            <div className={styles['card']}>
                <span className={styles['header']}>Add Course</span>
                <hr />
                <form className={styles['form-controls']} onSubmit={submitFormHandler}>
                    <div className={styles['form-control']}>
                        <label className={styles['form-control__label']}>Course Title</label>
                        <input type="text" className={styles['form-control__input']} ref={titleRef} />
                    </div>

                    <div className={styles['form-control']}>
                        <label className={styles['form-control__label']}>Subject</label>
                        <input type="text" className={styles['form-control__input']} ref={subRef} />
                    </div>

                    <div className={styles['form-control']}>
                        <label className={styles['form-control__label']}>Class</label>
                        <input type="text" className={styles['form-control__input']} ref={stdRef} />
                    </div>

                    <div className={styles['form-control']}>
                        <label className={styles['form-control__label']}>Price</label>
                        <input type="text" className={styles['form-control__input']} ref={priceRef} />
                    </div>

                    <div className={styles['actions']}>
                        <button type="submit">Add Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCourse;