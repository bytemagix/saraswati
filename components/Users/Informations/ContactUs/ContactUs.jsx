import styles from "./ContactUs.module.css";

const ContactUs = (props) => {
  return (
    <>
      <div className={styles["policies"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Contact Us</span>
          </div>
          <hr />
          <div>
            <div className={styles["section"]}>
              <p>
                Our Office addresses and Contact Information are given this footer section of this website.
                Currently we have two branch located in Guwahati & Mangaldai. You can visit our offices ( 10 AM - 5 PM ) expect Sunday or You can contact us via call, whatsapp or email.
                For Any enquiry feel free to use the Enquiry Form in the footer section of the website.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default ContactUs;