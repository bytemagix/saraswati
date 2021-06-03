import { useDispatch, useSelector } from "react-redux";
import styles from "./Checkout.module.css";
import { checkoutActions } from "../../../store/reducers/checkout-reducer";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.checkoutReducer.item);

  const modalCloseHandler = () => {
    dispatch(checkoutActions.closeModal());
  };

  const orderHandler = () => {

  }

  return (
    <div className={styles["checkout"]}>
        <div className={styles['card']}>
            <span className={styles['title']}>{item.title}</span>
            <span className={styles['price']}>{item.author}</span>
            <span className={styles['price']}>Rs. {item.price}</span>
            <div className={styles['actions']}>
                <button className={styles['button-close']} onClick={modalCloseHandler}>Close</button>
                <button className={styles['button-order']} onClick={orderHandler}>Order Now</button>
            </div>
        </div>
      <div className={styles["backdrop"]} onClick={modalCloseHandler}></div>
    </div>
  );
};

export default Checkout;
