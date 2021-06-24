import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import CartItem from "./CartItem/CartItem";
import { useRef } from "react";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.userSlice.cartItems);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const closeCartHandler = () => {
    dispatch(userActions.closeCartModal());
  };

  const orderHandler = async () => {
    const bookIds = [];
    cartItems.forEach((item) => {
      bookIds.push(item.bookId);
    });

    if (emailRef.current.value.trim().length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append("email", emailRef.current.value);
    formData.append("bookIds", JSON.stringify(bookIds));

    const response = await fetch("http://localhost:3000/api/sendbook", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setIsEmailSent(true);

    console.log(data);
    dispatch(userActions.removeAllFromCart());
  };

  return (
    <div className={styles["cart"]}>
      <div className={styles["card"]}>
        <div className={styles["header-c"]}>
          <span className={styles["header"]}>
            <u>Order Books</u>
          </span>
        </div>

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
              <div className={styles["form-controls"]}>
                <label className={styles["form-control__label"]}>
                  Email Id
                </label>
                <input
                  type="text"
                  ref={emailRef}
                  className={styles["form-control__input"]}
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
