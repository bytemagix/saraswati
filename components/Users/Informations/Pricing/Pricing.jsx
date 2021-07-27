import styles from "./Pricing.module.css";

const Pricing = (props) => {
  return (
    <>
      <div className={styles["policies"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Pricing</span>
          </div>
          <hr />
          <div>
            <div className={styles["section"]}>
              <p>
                1. There is no special permission or subscription needed to use
                our website.
                <br />
                <br />
                2. We offer Coaching classes, Home Tutions, Online Classes etc.
                We also sell digital books and Study materials.
                <br />
                <br />
                3. About Mentioned Services are paid services & all the necessary
                details regarding payment & pricing are clearly mentioned
                against the particular service.
                <br />
                <br />
                4. There is no hidden charges to use our website. we only charge
                for our paid services you chooses to purchase or enroll.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>More on Pricing</span>
              <p>
                Saraswati Tutorial may change or amend this pricing policy from
                time to time to incorporate necessary future changes. For more
                details on pricing. You can contact us on
                saraswatitutorial.mld@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default Pricing;
