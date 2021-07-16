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
import Modal from "../../../Utils/UI/Modal/Modal";
import Card from "../../../Utils/UI/Card/Card";

const Cart = (props) => {
  const cartData = useSelector((state) => state.userSlice.cart);
  const auth = useSelector((state) => state.userSlice.authInfo);
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const dispatch = useDispatch();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

  const closeCartHandler = () => {
    dispatch(userActions.closeCartModal());
  };

  const startPayment = async () => {
    const formData = new FormData();
    formData.append("amount", cartData.totalPrice);

    //Phone No Validation
    const res = await fetch(`${baseUrl}/payments/getorderid`, {
      method: "POST",
      body: formData,
    });
    const order = await res.json();
    const orderId = order.id;

    const options = {
      key: "rzp_test_ZJe7NCNHW5fVOQ", // Enter the Key ID generated from the Dashboard
      amount: "" + cartData.totalPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Saraswati Tutorials",
      description: "Order Study Materials",
      image:
        "https://static.wixstatic.com/media/bbc6b5_4d48047f9def41adb4ca0e1b06eb0ff9~mv2.jpeg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-10-19%20at%204_02_51%20PM_.webp",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        paymentSuccess(response);
      },
      prefill: {
        name: auth.emailId,
        email: auth.emailId,
        contact: enteredMobileNo,
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

    razor.on("payment.failed", function (response) {
      paymentFailure(response);
    });
  };

  const paymentSuccess = async (response) => {
    console.log(response.razorpay_payment_id);
    console.log(response.razorpay_order_id);
    console.log(response.razorpay_signature);

    const formData = new FormData();
    formData.append("paymentId", response.razorpay_payment_id);
    formData.append("orderId", response.razorpay_order_id);
    formData.append("paymentSignature", response.razorpay_signature);

    const res = await fetch(`${baseUrl}/payments/store-transactions`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    orderHandler();
  };

  const paymentFailure = (response) => {
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
  };

  const orderHandler = async () => {
    const bookIds = [];
    cartData.cartItems.forEach((item) => {
      bookIds.push(item.bookId);
    });

    //Email Validation

    const formData = new FormData();
    formData.append("bookIds", JSON.stringify(bookIds));
    formData.append("userId", auth.localId);

    const response = await fetch(`${baseUrl}/study-materials/orderbooks`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setIsEmailSent(true);

    console.log(data);
    dispatch(userActions.removeAllFromCart());

    closeCartHandler();
    router.push("/student-dashboard/download-materials");
  };

  const exploreBooksHandler = () => {
    closeCartHandler();
    router.push("/study-materials");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNoChangeHandler = (event) => {
    setEnteredPhoneNo(event.target.value);
  };

  return (
    <Modal onModalClose={closeCartHandler}>
      <div className={styles["card-container"]}>
        <Card>
          <div className={styles["header-c"]}>
            <span className={styles["header"]}>
              <u>Order Books</u>
            </span>
          </div>

          {cartData.cartItems.length === 0 && (
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

          {!isEmailSent && cartData.cartItems.length !== 0 && (
            <>
              <span className={styles["section-header"]}>Book Infomation</span>
              {cartData.cartItems.map((item) => (
                <CartItem
                  key={item.bookId}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              ))}

              {cartData.cartItems.map((item) => (
                <CartItem
                  key={item.bookId}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              ))}

              {cartData.cartItems.map((item) => (
                <CartItem
                  key={item.bookId}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              ))}

              <div className={styles["total"]}>
                <span>Total Price</span>
                <span className={styles["total-amount"]}>
                  Rs. {cartData.totalPrice}
                </span>
              </div>

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
                <button
                  className={styles["button-order"]}
                  onClick={startPayment}
                >
                  Order Now
                </button>
              </div>
            </>
          )}
        </Card>
      </div>
    </Modal>
  );
};

export default Cart;
