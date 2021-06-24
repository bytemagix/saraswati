import { useDispatch } from "react-redux";
import styles from "./BookItem.module.css";
import { userActions } from "../../../../store/slices/user-slice";

const BookItem = (props) => {
  const dispatch = useDispatch();

  const addCartHandler = () => {
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

  return (
    <div className={styles["card"]}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles["text-container"]}>
        <span className={styles["title"]}>{props.title}</span>
        <span className={styles["price"]}>Rs. {props.price}</span>
        <span>{props.stdId}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["cart-button"]} onClick={addCartHandler}>
          Cart
        </button>
        <button className={styles["buy-button"]} onClick={buyNowHandler}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookItem;
