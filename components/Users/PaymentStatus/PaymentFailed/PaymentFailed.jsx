import styles from "./PaymentFailed.module.css";
import Card from "../../../Utils/UI/Card/Card";
import NavLink from "next/link";

const PaymentFailed = (props) => {
  return (
    <div className={styles["payment-success"]}>
      <div className={styles["card-container"]}>
        <Card>
          <div className={styles['header']}>
            <span className={styles['header-title']}>Payment Failed</span>
          </div>
          <div>
              <hr />
          </div>
          <div className={styles["actions"]}>
            <span className={styles["dashboard-button"]}>
              <NavLink href="/study-materials">
                Go to Study Materials
              </NavLink>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentFailed;