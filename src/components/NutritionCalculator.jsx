import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import './NutritionCalculator.css';

const NutritionCalculator = () => {
    const [selectedId, setSelectedId] = useState(products[0].id);
    const [quantity, setQuantity] = useState(30);

    const selectedProduct = products.find(p => p.id === selectedId);
    const multiplier = quantity / 30;

    return (
        <section className="nutrition-calculator">
            <div className="calculator-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Nutrition Calculator</h2>
                    <p className="subtitle">Smart Snacking Starts Here. Calculate Your Intake.</p>

                    <div className="calc-controls">
                        <div className="flavor-selector">
                            <h3>Select Flavor</h3>
                            <div className="flavor-tabs">
                                {products.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setSelectedId(p.id)}
                                        className={selectedId === p.id ? 'active' : ''}
                                        style={{
                                            '--active-color': p.color,
                                        }}
                                    >
                                        <img src={p.image} alt={p.name} className="tab-thumb" />
                                        {p.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="quantity-selector">
                            <h3>Portion Size (grams)</h3>
                            <div className="range-wrapper">
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                />
                                <span className="qty-display">{quantity}g</span>
                            </div>
                            <p className="serving-hint">Standard serving is 30g</p>
                        </div>
                    </div>

                    <div className="calc-results">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedId + quantity}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="results-grid"
                            >
                                <div className="result-card">
                                    <span className="label">Calories</span>
                                    <span className="value" style={{ color: selectedProduct.color }}>
                                        {Math.round(selectedProduct.nutrition.calories * multiplier)}
                                    </span>
                                    <span className="unit">kcal</span>
                                </div>
                                <div className="result-card">
                                    <span className="label">Protein</span>
                                    <span className="value" style={{ color: selectedProduct.color }}>
                                        {Math.round(selectedProduct.nutrition.protein * multiplier * 10) / 10}
                                    </span>
                                    <span className="unit">g</span>
                                </div>
                                <div className="result-card">
                                    <span className="label">Carbs</span>
                                    <span className="value" style={{ color: selectedProduct.color }}>
                                        {Math.round(selectedProduct.nutrition.carbs * multiplier * 10) / 10}
                                    </span>
                                    <span className="unit">g</span>
                                </div>
                                <div className="result-card">
                                    <span className="label">Dietary Fiber</span>
                                    <span className="value" style={{ color: selectedProduct.color }}>
                                        {Math.round(selectedProduct.nutrition.fiber * multiplier * 10) / 10}
                                    </span>
                                    <span className="unit">g</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NutritionCalculator;
