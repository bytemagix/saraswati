import { useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import { cartActions } from '../../../store/reducers/cart-reducer';

const Cart = props => {
    const dispatch = useDispatch();

    const closeCartHandler = () => {
        dispatch(cartActions.cartModalClose());
    }

    const orderHandler = () => {
        
    }

    return (
        <div className={styles['cart']}>
            <div className={styles['card']}>
                <h2>Order Books</h2>
                <div className={styles['actions']}>
                <button className={styles['button-close']} onClick={closeCartHandler}>Close</button>
                <button className={styles['button-order']} onClick={orderHandler}>Order Now</button>
            </div>
            </div>

            <div className={styles['backdrop']} onClick={closeCartHandler}></div>
        </div>
    );
}

export default Cart;