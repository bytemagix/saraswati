import styles from './BookSummary.module.css';

const BookSummary = props => {

    return (
        <div className={styles['book-summary']}>
            <h2>Book Summary</h2>
        </div>
    );
}

export default BookSummary;