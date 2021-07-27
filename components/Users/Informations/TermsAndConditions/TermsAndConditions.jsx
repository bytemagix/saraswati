import styles from "./TermsAndConditions.module.css";
import NavLink from "next/link";

const TermsAndConditions = (props) => {
  return (
    <>
      <div className={styles["policies"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Terms & Conditions</span>
          </div>
          <hr />
          <div>
            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>Terms of use</span>
              <p>
                1. There is no special permission needed to use our website.
                <br />
                <br />
                2. Once user agreed to use our website & Sigup with our website
                we collect some essential information to provide our services.
                which is clearly mentioned in{" "}
                <span className={styles["link"]}>
                  <NavLink href="/informations/privacy-policy">
                    privicy policy
                  </NavLink>
                </span>{" "}
                of this website.
                <br />
                <br />
                3. There is no hidden charges to use our website. we only charge
                for our paid services you chooses to purchase or enroll. Pricing
                model is clearly mentioned in
                <span className={styles["link"]}>
                  <NavLink href="/informations/pricing"> Pricing</NavLink>
                </span>{" "}
                of this website.
                <br />
                <br />
                4. There are few paid services which includes online payments.
                we have taken special care for using sensitive infomations but
                please use your sensitive information with precautions.
                <br />
                <br />
                5. We don't share any user details with any third party for
                protect safety of our user.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                More on Terms & Conditions
              </span>
              <p>
                Saraswati Tutorial may change or amend this Terms & Conditions
                from time to time to incorporate necessary future changes. For
                more details on terms and conditions. You can contact us on
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

export default TermsAndConditions;
