import styles from "./PaymentStatus.module.css";
import PaymentSuccess from "./PaymentSuccess/PaymentSuccess";
import PaymentFailed from "./PaymentFailed/PaymentFailed";

const PaymentStatus = (props) => {
  const query = props.query.query;
  const PAYMENT_STATUS = query.payment_status;

  return (
    <>
      <div className={styles["payment-status"]}>
        {(PAYMENT_STATUS === "Credit") && <PaymentSuccess />}
        {(PAYMENT_STATUS !== "Credit") && <PaymentFailed />}
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default PaymentStatus;
