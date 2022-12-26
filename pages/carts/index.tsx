import { useRef, useState } from 'react';
import CartItem from '../../components/CartItem';
import styles from './styles.module.css'

const cartItems = [{
    orderData: {
        entrySeq: () => { return [0, 1, 2, 3, 4] }
    },
    product: {
        name: 'Buavita'
    }
}, {
    orderData: {
        entrySeq: () => { return [0, 1, 2, 3, 4] }
    },
    product: {
        name: 'Milkita'
    }
}]

const Cart = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const onClickOverlay = () => {
        setIsOpenSidebar(prev => !prev)
    }

    return (
        <div onClick={onClickOverlay}>
            <div
                className={isOpenSidebar ? styles.cartOpen : styles.cartClosed}
            >
                <div className={styles.cartElement}>
                    <h2>Your Cart</h2>
                    <hr
                        style={{
                            height: 6,
                            backgroundColor: '#000',
                            width: '100%',
                        }}
                    />
                    <h5>Order Summary</h5>
                    {cartItems.map((each: any, index: number) => <CartItem key={index} data={each} />)}
                </div>
            </div>
        </div>
    )
}
export default Cart;
