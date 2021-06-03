import { useSelector } from "react-redux";
import Books from "./Books/Books";
import Checkout from "./Checkout/Checkout";
import FilterBooks from "./FilterBooks/FilterBooks";
import styles from "./StudyMaterials.module.css";

const StudyMaterials = (props) => {
  const isCheckoutOpen = useSelector(
    (state) => state.checkoutReducer.isModalOpen
  );

  return (
    <div className={styles["study"]}>
      <FilterBooks />
      <Books />
      {isCheckoutOpen && (
        <div className={styles["checkout"]}>
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
