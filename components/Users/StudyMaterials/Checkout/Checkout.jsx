import { useDispatch, useSelector } from "react-redux";
import styles from "./Checkout.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import { useEffect, useRef } from "react";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { baseUrl } from "../../../../constants/urls";
import { localUrl } from "../../../../constants/urls";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.userSlice.cartItems);
  const auth = useSelector(state => state.userSlice.authInfo);

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");

  const modalCloseHandler = () => {
    dispatch(userActions.closeCheckoutModal());
  };

  const getOrderId = async () => {

    //Validate PhoneNo

    const res = await fetch(`${localUrl}/payments/getorderid`);
    const order = await res.json();
    const orderId = order.id;
    console.log(orderId);

    const options = {
      key: "rzp_test_ZJe7NCNHW5fVOQ", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Saraswati Tutorials",
      description: "Payment for Ordering Book",
      image: "https://static.wixstatic.com/media/bbc6b5_4d48047f9def41adb4ca0e1b06eb0ff9~mv2.jpeg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-10-19%20at%204_02_51%20PM_.webp",
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
    items.forEach((item) => {
      bookIds.push(item.bookId);
    });

    //Email Validation

    const formData = new FormData();
    formData.append("bookIds", JSON.stringify(bookIds));
    formData.append("userId",auth.localId);
    
    const response = await fetch(`${baseUrl}/books/orderbooks`, {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    
    setIsEmailSent(true);

    console.log(data);
    dispatch(userActions.removeAllFromCart());
  };

  const phoneNoChangeHandler= event => {
    setEnteredPhoneNo(event.target.value);
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

            <div className={styles['contact-box']}>
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
                onClick={modalCloseHandler}
              >
                Close
              </button>
              <button className={styles["button-order"]} onClick={getOrderId}>
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
