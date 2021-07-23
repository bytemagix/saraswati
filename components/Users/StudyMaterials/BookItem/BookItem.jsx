import { useDispatch, useSelector } from "react-redux";
import styles from "./BookItem.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import { useRouter } from "next/router";
import { useState } from "react";
import BlueCircleLoader from "../../../Utils/UI/BlueCircleLoader/BlueCircleLoader";
import { baseUrl } from "../../../../constants/urls";

const BookItem = (props) => {
  const auth = useSelector((state) => state.userSlice.authInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const isFree = props.price === "0";
  const price = props.price === "0" ? "Free" : "Rs. "+props.price;

  const addCartHandler = () => {
    if (!auth.isAuthenticated) {
      router.push("/login");
      return;
    }

    dispatch(
      userActions.addToCart({
        bookId: props.bookId,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image,
      })
    );
  };

  const buyNowHandler = () => {
    if (!auth.isAuthenticated) {
      router.push("/login");
      return;
    }
    dispatch(
      userActions.buyNow({
        bookId: props.bookId,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image,
      })
    );
  };

  const freeDownloadHandler = async () => {
    setIsLoading(true);
    const bookIds = [];
    bookIds.push(props.bookId);
    //Email Validation

    const formData = new FormData();
    formData.append("bookIds", JSON.stringify(bookIds));
    formData.append("userId", auth.localId);

    const response = await fetch(`${baseUrl}/study-materials/order-books`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    setIsLoading(false);
    router.push("/student-dashboard/download-materials");
  };

  return (
    <div className={styles["card"]}>
      
        <>
          <div
            className={styles["image-container"]}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <div className={styles["text-container"]}>
            <span className={styles["title"]}>{props.title}</span>
            <span className={styles["price"]}>{price}</span>
            <span>{props.stdId}</span>
          </div>
          <div className={styles["actions"]}>
            {!isFree && (
              <>
                <button
                  className={styles["cart-button"]}
                  onClick={addCartHandler}
                >
                  Cart
                </button>
                <button
                  className={styles["buy-button"]}
                  onClick={buyNowHandler}
                >
                  Buy Now
                </button>
              </>
            )}
            {isFree && (
              <button className={styles["download-btn"]} onClick={freeDownloadHandler}>
                Download Free Sample
              </button>
            )}
          </div>
        </>
      
      {isLoading && <div className={styles['loading']}><BlueCircleLoader /></div>}
    </div>
  );
};

export default BookItem;
