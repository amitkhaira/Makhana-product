import { motion } from 'framer-motion';
import masalaImg from '../assets/masala.png';
import mintImg from '../assets/mint.png';
import saltyImg from '../assets/salty.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Explosion of Flavor & Health
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                >
                    Premium Makhana Snacks for your Guilt-Free Cravings.
                    <br />Roasted, Crunchier, Healthier.
                </motion.p>
                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 107, 107, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Explore Flavors
                </motion.button>
            </div>

            <div className="hero-visuals">
                <motion.img
                    src={masalaImg}
                    alt="Masala Makhana"
                    className="hero-packet packet-left"
                    initial={{ x: -100, opacity: 0, rotate: -30 }}
                    animate={{ x: 0, opacity: 1, rotate: -15 }}
                    whileHover={{ y: -20, rotate: -20, scale: 1.1 }}
                    transition={{ duration: 1, type: "spring" }}
                />
                <motion.img
                    src={mintImg}
                    alt="Mint Makhana"
                    className="hero-packet packet-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -30, scale: 1.1 }}
                    transition={{ delay: 0.2, duration: 1, type: "spring" }}
                />
                <motion.img
                    src={saltyImg}
                    alt="Salty Makhana"
                    className="hero-packet packet-right"
                    initial={{ x: 100, opacity: 0, rotate: 30 }}
                    animate={{ x: 0, opacity: 1, rotate: 15 }}
                    whileHover={{ y: -20, rotate: 20, scale: 1.1 }}
                    transition={{ delay: 0.4, duration: 1, type: "spring" }}
                />
            </div>
        </section>
    );
};

export default Hero;
