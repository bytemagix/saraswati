import { useDispatch, useSelector } from "react-redux";
import styles from "./Checkout.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import { useRef } from "react";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import InputBox from "../../../Utils/UI/InputBox/InputBox";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.userSlice.cartItems);

  const [enteredEmail,setEnteredEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const modalCloseHandler = () => {
    dispatch(userActions.closeCheckoutModal());
  };

  const orderHandler = async () => {
    const bookIds = [];
    items.forEach((item) => {
      bookIds.push(item.bookId);
    });

    //Email Validation

    const formData = new FormData();
    formData.append("email", enteredEmail);
    formData.append("bookIds", JSON.stringify(bookIds));

    const response = await fetch("https://saraswati-api.herokuapp.com/books/sendbooks", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    /*
    const response = await fetch('https://us-central1-saraswati-45e10.cloudfunctions.net/sendbooks');
    const data = await response.json();*/
    setIsEmailSent(true);

    console.log(data);
    dispatch(userActions.removeAllFromCart());
  };

  const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  return (
    <div className={styles["checkout"]}>
      <div className={styles["card"]}>
        <header className={styles['modal-header']}><u>Order Book</u></header>
        {!isEmailSent && items.length !== 0 && (
          <>
            <div className={styles["book-info"]}>
              <span className={styles["header"]}>Book Infomation</span>
              <span className={styles["title"]}>{items[0].title}</span>
              <span className={styles["price"]}>{items[0].author}</span>
              <span className={styles["price"]}>Rs. {items[0].price}</span>
            </div>
            <div className="divider">
              <hr />
            </div>
            <div className={styles["mailbox"]}>
              <span className={styles["header"]}>Communication Detail</span>
              
              <div className={styles['input-box']}>
                  <InputBox
                  label="Email"
                  id="email"
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler} />
              </div>

              <div className={styles["message-box"]}>
                <p className={styles["form-message"]}>
                  Your purchased ebook will be sent to this email address
                </p>
              </div>
            </div>
            <div className={styles["actions"]}>
              <button
                className={styles["button-close"]}
                onClick={modalCloseHandler}
              >
                Close
              </button>
              <button className={styles["button-order"]} onClick={orderHandler}>
                Order Now
              </button>
            </div>
          </>
        )}

        {isEmailSent && <SuccessMessage onClose={modalCloseHandler} />}
      </div>
      <div className={styles["backdrop"]} onClick={modalCloseHandler}></div>
    </div>
  );
};

export default Checkout;
