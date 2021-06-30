import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import CartItem from "./CartItem/CartItem";
import { useRef } from "react";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { useRouter } from "next/router";
import InputBox from "../../../Utils/UI/InputBox/InputBox";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.userSlice.cartItems);
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

  const closeCartHandler = () => {
    dispatch(userActions.closeCartModal());
  };

  const orderHandler = async () => {
    const bookIds = [];
    cartItems.forEach((item) => {
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
    setIsEmailSent(true);

    console.log(data);
    dispatch(userActions.removeAllFromCart());
  };

  const exploreBooksHandler = () => {
    closeCartHandler();
    router.push("/study-materials");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  return (
    <div className={styles["cart"]}>
      <div className={styles["card"]}>
        <div className={styles["header-c"]}>
          <span className={styles["header"]}>
            <u>Order Books</u>
          </span>
        </div>

        {cartItems.length === 0 && (
          <div className={styles["no-cart-item"]}>
            <span className={styles["no-item-message"]}>
              No Item Available In Cart
            </span>
            <button
              onClick={exploreBooksHandler}
              className={styles["explore-btn"]}
            >
              Explore Study Materials
            </button>
          </div>
        )}

        {!isEmailSent && cartItems.length !== 0 && (
          <>
            <span className={styles["section-header"]}>Book Infomation</span>
            {cartItems.map((item) => (
              <CartItem
                key={item.bookId}
                title={item.title}
                author={item.author}
                price={item.price}
              />
            ))}

            <div className={styles["mailbox"]}>
              <span className={styles["section-header"]}>
                Communication Detail
              </span>

              <div className={styles['input-box']}>
                <InputBox
                  label="Email Id"
                  id="email"
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
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
                onClick={closeCartHandler}
              >
                Close
              </button>
              <button className={styles["button-order"]} onClick={orderHandler}>
                Order Now
              </button>
            </div>
          </>
        )}

        {isEmailSent && <SuccessMessage onClose={closeCartHandler} />}
      </div>
      <div className={styles["backdrop"]} onClick={closeCartHandler}></div>
    </div>
  );
};

export default Cart;
