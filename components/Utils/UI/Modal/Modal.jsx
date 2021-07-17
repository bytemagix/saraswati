import ButtonOrange from "../Buttons/ButtonOrange/ButtonOrange";
import styles from "./Modal.module.css";
import MakePaymentButton from "../Buttons/MakePaymentButton/MakePaymentButton";
import FooterSpinner from '../../UI/FooterSpinner/FooterSpinner';
import BlueCircleLoader from "../BlueCircleLoader/BlueCircleLoader";

const Modal = (props) => {
  return (
    <>
      <div className={styles["modal"]}>
        <div className={styles["modal-header"]}>
          <span className={styles["modal-header-title"]}>{props.header}</span>
        </div>
        
        <div className={styles["modal-content"]}>{props.children}</div>

        <div className={styles['footer']}>
            <div className={styles['payable']}>
                <span className={styles['payable-label']}>Payable Amount</span>
                <span className={styles['payable-amount']}>Rs. {props.amount}</span>
            </div>
            <div className={styles['actions']}>
                <MakePaymentButton title="Make Payment" onClick={props.startPayment} />
            </div>
        </div>
        
        {props.isLoading && (
          <div className={styles["loading"]}>
            <BlueCircleLoader />
          </div>
        )}

      </div>
      <div className={styles["backdrop"]} onClick={props.onModalClose}></div>
    </>
  );
};

export default Modal;
