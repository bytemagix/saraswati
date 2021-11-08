import styles from "./BookingDetail.module.scss";

const BookingDetail = props => {
    
    const bookingData = props.bookingData;

    return (
        <div className={styles['booking-detail']}>
            <div className={styles['card']}>
                <div className={styles['header']}>
                    <span className={styles['header-title']}>Booking detail</span>
                    <div><hr /></div>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Name</span>
                    <span className={styles['value']}>{bookingData.studentName}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Mobile No</span>
                    <span className={styles['value']}>{bookingData.studentMobileNo}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Email Id</span>
                    <span className={styles['value']}>{bookingData.studentEmailId}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>City</span>
                    <span className={styles['value']}>{bookingData.city}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Class</span>
                    <span className={styles['value']}>{bookingData.standard}</span>
                </div>

                <div className={styles['label-box']}>
                    <span className={styles['label']}>Subject</span>
                    <span className={styles['value']}>{bookingData.subject}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Description</span>
                    <span className={styles['value']}>{bookingData.description}</span>
                </div>
                <div className={styles['label-box']}>
                    <span className={styles['label']}>Address</span>
                    <span className={styles['value']}>{bookingData.address}</span>
                </div>
            </div>
        </div>
    );
}

export default BookingDetail;