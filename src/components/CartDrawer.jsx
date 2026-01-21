import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        isCartOpen,
        toggleCart,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="cart-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                    />

                    {/* Drawer */}
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="cart-header">
                            <h2>Your Stash</h2>
                            <button onClick={toggleCart} className="close-btn">×</button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <div className="cart-empty">
                                    <p>Your cart feels light...</p>
                                    <button onClick={toggleCart} className="shop-btn">Start Snacking</button>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <motion.div
                                        key={item.id}
                                        className="cart-item"
                                        layout
                                    >
                                        <div className="item-img">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p className="item-price">₹{item.price || 150}</p>
                                            <div className="qty-controls">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="remove-btn"
                                            aria-label="Remove item"
                                        >
                                            🗑️
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="total-row">
                                    <span>Total</span>
                                    <span className="total-amount">₹{cartTotal}</span>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
