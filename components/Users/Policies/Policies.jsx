import styles from "./Policies.module.css";

const Policies = (props) => {
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
              <p>
                This privacy policy is subjected to the terms and conditions of
                use of the website (www.saraswatitutorial.org) and comes into
                effect from the date and time a user Signup with this website
                and accepts the terms and condition. By using the website, The
                user consents the collection, storage, and use of the personal
                information you provide for the services that this website
                offers. Our Privacy Policy sets out how our website collects,
                use, share and protect information provided in the website, and
                your choices about the collection and use of your information.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                Collection of Personal Information
              </span>
              <p>
                For providing our services, Our Website collects following
                information from its user <br />
                <br />
                1. Personal details of user. i.e Name, Mobile number, and email
                address, age, gender etc. When you register add details in our
                website. These information are needed to enroll you to our
                courses or any other services. Only our Magement team can view
                those infomation.
                <br />
                <br />
                2.We also sometimes may store your physical address to
                communicate in offline mode. like sending some phisical items to
                your address etc.
                <br />
                <br />
                We use above information to provide user our services, sending
                promotional message, special offers or for more customized
                experiences. We may use those information for internal record
                keeping and improving our services.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                Storage of Information
              </span>
              <p>
                We have taken special care to protect the information that user
                provide to us. However, no method of transmitting or storing
                electronic data is ever completely secured, and we cannot
                guarantee that such information will never be accessed, used, or
                released in a manner that is inconsistent with this policy. We
                expressly disclaim any representation or warranty, whether
                express or implied, with respect to ensuring, guaranteeing, or
                otherwise offering any definitive promise of security in
                connection with your information. The user is responsible for
                maintaining the security of his/her personal information at any
                time. The user is solely responsible for maintaining
                confidentiality of the user password and user identification.
                The user shall be solely responsible for all activities and
                transmission performed by the user through his user
                identification. Saraswati Tutorial assumes no responsibility or
                liability for their improper use of information relating to such
                usage of debit cards or internet banking by the user, whether
                online or off-line.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                Sharing of Information
              </span>
              <p>
                1. Infomation we collect here are for solely for the services of
                our website. <br /> <br />
                2. We do not share any infomation provided to us in our website
                to any third party. <br /> <br />
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>Terms of use</span>
              <p>
                1. There is no special permission needed to use our website.
                <br />
                <br />
                2. There the few paid services in our website & all the
                necessary details regarding payment & pricing are clearly
                mentioned against the particular service.
                <br />
                <br />
                3. There is no hidden charges to use our website. we only charge
                for our paid services you chooses to purchase or enroll.
              </p>
            </div>

            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>Refund Policy</span>
              <p>
                1. In case of any canceled services from our side. We will
                provide full refund to the user.
                <br />
                <br />
                2. In case of user want to discontinue our online classes, home
                tutor service we will provide 75% refund with 5 days of
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
                More on Terms & Conditions
              </span>
              <p>
                Saraswati Tutorial may change or amend this Terms & Conditions, Privacy Policy Or Refund Policy from time
                to time to incorporate necessary future changes. For more details on terms and condition.
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

export default Policies;
