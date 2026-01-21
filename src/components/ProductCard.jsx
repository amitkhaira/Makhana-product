import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="product-card"
            layout
            data-is-open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            style={{ '--card-color': product.color }}
            whileHover={{ y: -5 }}
        >
            <motion.div className="card-header" layout="position">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    layoutId={`image-${product.id}`}
                />
                <motion.h3 layout="position">{product.name}</motion.h3>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="card-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <p>{product.description}</p>
                        <div className="nutrition-grid">
                            <div className="nutrient">
                                <span>Cal</span>
                                <strong>{product.nutrition.calories} kcal</strong>
                            </div>
                            <div className="nutrient">
                                <span>Pro</span>
                                <strong>{product.nutrition.protein}g</strong>
                            </div>
                            <div className="nutrient">
                                <span>Fat</span>
                                <strong>{product.nutrition.fat}g</strong>
                            </div>
                        </div>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.p
                    className="tap-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                >
                    Tap for details
                </motion.p>
            )}
        </motion.div>
    );
};

export default ProductCard;
