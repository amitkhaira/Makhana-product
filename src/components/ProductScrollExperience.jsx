import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import makhanaPieces from '../assets/makhana-pieces.png';
import './ProductScrollExperience.css';

// Component to handle the flooding animation
const MakhanaFlood = ({ scrollYProgress }) => {
    // Generate random trajectories for particles
    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            // Start from top center (packet opening)
            startX: Math.random() * 40 - 20,
            startY: -150, // Top of packet approx
            // End scattering wide and down
            endX: Math.random() * 600 - 300,
            endY: Math.random() * 400 + 100,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.4 + 0.6,
            delay: Math.random() * 0.1
        }));
    }, []);

    return (
        <div className="makhana-flood-container">
            {particles.map((p) => {
                // Map scroll progress to particle movement
                // 0.2 -> start of flood
                const y = useTransform(scrollYProgress, [0.2, 0.8], [p.startY, p.endY]);
                const x = useTransform(scrollYProgress, [0.2, 0.8], [p.startX, p.endX]);
                const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, p.rotate]);
                const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
                const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.1, p.scale]);

                return (
                    <motion.img
                        key={p.id}
                        src={makhanaPieces}
                        className="flood-particle"
                        style={{
                            x,
                            y,
                            rotate,
                            scale,
                            opacity,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '80px',
                            zIndex: 3, // Above packet
                        }}
                    />
                );
            })}
        </div>
    );
};

const ProductSection = ({ product }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Pop-out elements transforms
    const { addToCart } = useCart();

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.9, 1.1, 0.9]);
    const rotate = useTransform(scrollYProgress, [0.2, 0.8], [5, -5]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={ref}
            className="product-scroll-section"
            style={{ background: product.bgGradient }}
        >
            <motion.div
                className="scroll-content"
                style={{ opacity }}
            >
                <motion.div className="product-visual">
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className="main-packet"
                        style={{ y, scale, rotate }}
                    />

                    {/* The Flood Animation */}
                    <MakhanaFlood scrollYProgress={scrollYProgress} />
                </motion.div>

                <motion.div
                    className="product-info"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.5 }}
                >
                    <h2 style={{ color: 'white' }}>{product.name}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.95)' }}>{product.description}</p>

                    <div className="floating-stats">
                        <div className="stat">
                            <span style={{ color: 'white' }}>{product.nutrition.calories}</span>
                            <small style={{ color: 'var(--color-dark)' }}>kcal</small>
                        </div>
                        <div className="stat">
                            <span style={{ color: 'white' }}>{product.nutrition.protein}g</span>
                            <small style={{ color: 'var(--color-dark)' }}>Protein</small>
                        </div>
                    </div>

                    <button
                        className="buy-btn"
                        style={{ color: product.accentColor }}
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart <span>→</span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const ProductScrollExperience = () => {
    return (
        <div className="scroll-experience-container">
            {products.map(product => (
                <ProductSection key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductScrollExperience;
