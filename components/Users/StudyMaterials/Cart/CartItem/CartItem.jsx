import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      <div className={styles['cart-item']}>
        <div className={styles['cart-info']}>
          <span className={styles["title"]}>{props.title}</span>
          <span className={styles["author"]}>{props.author}</span>
        </div>
        <div>
          <span className={styles["price"]}>Rs. {props.price}</span>
        </div>
      </div>
      <div className={styles["divider"]}>
        <hr />
      </div>
    </>
  );
};

export default CartItem;
