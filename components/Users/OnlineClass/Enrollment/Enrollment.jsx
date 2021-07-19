import styles from "./Enrollment.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import TextAreaBox from "../../../Utils/UI/TextAreaBox/TextAreaBox";
import SendDataModal from "../../../Utils/UI/SendDataModal/SendDataModal";
import { baseUrl } from "../../../../constants/urls";
import { localUrl } from "../../../../constants/urls";
import { RAZOR_LIVE_KEY_ID } from "../../../../constants/keys";

const Enrollment = (props) => {
  const router = useRouter();

  const auth = useSelector((state) => state.userSlice.authInfo);

  const [enteredName, setEnteredName] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPrevSchool, setEnteredPrevSchool] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [isDataSent, setIsDataSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Successfully Enrolled");

  const courseId = router.query.courseId;

  const courses = useSelector((state) => state.onlineClassSlice.courses);
  // const courseInfo = courses.find((item) => item.courseId === courseId);

  const courseInfo = props.data;

  const coursePrice = 4999;

  // Payment
  const startPayment = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("amount", coursePrice);

    //Phone No Validation
    const res = await fetch(`${baseUrl}/payments/getorderid`, {
      method: "POST",
      body: formData,
    });
    const order = await res.json();
    const orderId = order.id;
    console.log(orderId);

    const options = {
      key: RAZOR_LIVE_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: "" + coursePrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Saraswati Tutorials",
      description: "Course Enrollment Fee",
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
    formData.append("paymentId",response.razorpay_payment_id);
    formData.append("orderId",response.razorpay_order_id);
    formData.append("paymentSignature",response.razorpay_signature);

    const res = await fetch(`${baseUrl}/payments/store-transaction`,{
      method : "POST",
      body : formData
    })

    const data = await res.json();
    console.log(data);

    enrollmentHandler();
  };

  const paymentFailure = (response) => {
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobileNoChangeHandler = (event) => {
    setEnteredMobileNo(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const prevSchoolChangeHandler = (event) => {
    setEnteredPrevSchool(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const enrollmentHandler = (event) => {
    event.preventDefault();

    setIsDataSent(true);

    //Validation
    console.log(enteredName);
    console.log(enteredMobileNo);
    console.log(enteredEmail);

    const formData = new FormData();
    formData.append("courseId", courseId);
    formData.append("userId", auth.localId);
    formData.append("courseTitle", courseInfo.courseTitle);
    formData.append("courseTutor", courseInfo.courseTutor);
    formData.append("courseDescription", courseInfo.courseDescription);
    formData.append("name", enteredName);
    formData.append("mobileNo", enteredMobileNo);
    formData.append("email", enteredEmail);
    formData.append("prevSchool", enteredPrevSchool);
    formData.append("address", enteredAddress);

    sendData(formData);
  };

  const sendData = async (formdata) => {
    const res = await fetch(`${baseUrl}/online-class/enroll-online-class`, {
      method: "POST",
      body: formdata,
    });

    const data = await res.json();
    console.log(data);

    resetForm();
    setShowMessage(true);
    setTimeout(closeLoadingSpinner, 1500);
  };

  const closeLoadingSpinner = () => {
    setIsDataSent(false);
  };

  const resetForm = () => {
    setEnteredName("");
    setEnteredMobileNo("");
    setEnteredEmail("");
    setEnteredPrevSchool("");
    setEnteredAddress("");
  };

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles["enrollment"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Enrollment Form</span>
        </div>
        <div>
          <hr />
        </div>
        <div className={styles["course-info"]}>
          <span className={styles["form-header-title"]}>
            Course Information
          </span>
          <span>{courseInfo.courseTitle}</span>
          <span>{courseInfo.courseTutor}</span>
          <span>{courseInfo.courseDescription}</span>
          <span>Course Price</span>
        </div>
        <div className={styles["form"]}>
          <div className={styles["form-header"]}>
            <span className={styles["form-header-title"]}>
              Student Infomation
            </span>
          </div>
          <form onSubmit={startPayment} className={styles["form-controls"]}>
            <InputBox
              label="Name"
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
            <InputBox
              label="Mobile No"
              id="mobileNo"
              type="number"
              value={enteredMobileNo}
              onChange={mobileNoChangeHandler}
            />

            <InputBox
              label="Email Id"
              id="email"
              type="text"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />

            <InputBox
              label="Previous School/College Name"
              id="prevschool"
              type="text"
              value={enteredPrevSchool}
              onChange={prevSchoolChangeHandler}
            />

            <TextAreaBox
              label="Parmanent Address"
              id="address"
              type="text"
              rows="4"
              value={enteredAddress}
              onChange={addressChangeHandler}
            />

            <div className={styles["actions"]}>
              <button type="submit" className={styles["btn-enroll"]}>
                Enroll Now
              </button>
            </div>
          </form>
        </div>

        {isDataSent && (
          <div className={styles["sending"]}>
            <SendDataModal showMessage={showMessage} message={message} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Enrollment;
