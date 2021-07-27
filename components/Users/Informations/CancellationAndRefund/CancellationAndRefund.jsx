import styles from "./CancellationAndRefund.module.css";

const CancellationAndRefund = (props) => {
  return (
    <>
      <div className={styles["policies"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Cancellation And Refund Policy</span>
          </div>
          <hr />
          <div>

            <div className={styles["section"]}>
              <p>
                1. In case of any canceled services from our side. We will
                provide 100% refund to the user.
                <br />
                <br />
                2. In case of user want to discontinue our online classes, home
                tutor service, we will provide 75% refund with 5 days of
                enrollment.
                <br />
                <br />
                3. There will be no refund in case of successfull order of study
                materials.
                <br />
                <br />
                4. Refund may take upto 3-4 bussiness days to complete.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                More on Cancellation & Refund Policy
              </span>
              <p>
                Saraswati Tutorial may change or amend this Cancellation & Refund Policy from time
                to time to incorporate necessary future changes. For more details on Cancellation & Refund Policy.
                You can contact us on saraswatitutorial.mld@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default CancellationAndRefund;