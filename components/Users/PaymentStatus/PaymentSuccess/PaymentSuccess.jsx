import styles from "./PaymentSuccess.module.css";
import Card from "../../../Utils/UI/Card/Card";
import NavLink from "next/link";

const PaymentSuccess = (props) => {
  return (
    <div className={styles["payment-success"]}>
      <div className={styles["card-container"]}>
        <Card>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Order Summary</span>
          </div>
          <div className={styles["divider"]}>
            <hr />
          </div>

          <div className={styles["contents"]}>
            <p>
              Your Order was successfull. You can view & download your materials
              from Student Dashboard section of the website and Browse to the
              download study materials option.
            </p>
          </div>

          <div className={styles["actions"]}>
            <span className={styles["dashboard-button"]}>
              <NavLink href="/student-dashboard/download-materials">
                Go to Dashboard
              </NavLink>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
