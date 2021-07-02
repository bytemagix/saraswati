import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import CartItem from "./CartItem/CartItem";
import { useRef } from "react";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { useRouter } from "next/router";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { baseUrl } from "../../../../constants/urls";
import { localUrl } from "../../../../constants/urls";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.userSlice.cartItems);
  const auth = useSelector((state) => state.userSlice.authInfo);
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const dispatch = useDispatch();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

  const closeCartHandler = () => {
    dispatch(userActions.closeCartModal());
  };

  const getOrderId = async () => {
    //Phone No Validation
    const res = await fetch(`${baseUrl}/payments/getorderid`);
    const order = await res.json();
    const orderId = order.id;
    console.log(orderId);

    const options = {
      key: "rzp_test_ZJe7NCNHW5fVOQ", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Saraswati Tutorials",
      description: "Payment for Ordering Book",
      image:
        "https://static.wixstatic.com/media/bbc6b5_4d48047f9def41adb4ca0e1b06eb0ff9~mv2.jpeg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-10-19%20at%204_02_51%20PM_.webp",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "/",
      prefill: {
        name: auth.emailId,
        email: auth.emailId,
        contact: enteredPhoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new Razorpay(options);
    razor.open();
  };

  const orderHandler = async () => {
    const bookIds = [];
    cartItems.forEach((item) => {
      bookIds.push(item.bookId);
    });

    //Email Validation

    const formData = new FormData();
    formData.append("bookIds", JSON.stringify(bookIds));
    formData.append("userId", auth.localId);

    const response = await fetch(`${baseUrl}/books/orderbooks`, {
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

  const phoneNoChangeHandler= event => {
    setEnteredPhoneNo(event.target.value);
  }

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

            <div className={styles["contact-box"]}>
              <InputBox
                label="Mobile No"
                id="mobile"
                type="number"
                value={enteredPhoneNo}
                onChange={phoneNoChangeHandler}
              />
            </div>

            <div className={styles["actions"]}>
              <button
                className={styles["button-close"]}
                onClick={closeCartHandler}
              >
                Close
              </button>
              <button className={styles["button-order"]} onClick={getOrderId}>
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
