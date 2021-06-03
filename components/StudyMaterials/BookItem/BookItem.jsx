import { useDispatch } from "react-redux";
import Card from "../../UI/Card";
import styles from "./BookItem.module.css";
import { cartActions } from "../../../store/reducers/cart-reducer";
import { checkoutActions } from "../../../store/reducers/checkout-reducer";

const BookItem = (props) => {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.title,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image,
      })
    );
  };

  const modalOpenHandler = () => {
    dispatch(
      checkoutActions.openModal({
        id: props.title,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image
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
        <button className={styles["buy-button"]} onClick={modalOpenHandler}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookItem;
