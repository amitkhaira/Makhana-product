import { motion } from 'framer-motion';
import './Recipes.css';

const recipes = [
    {
        id: 1,
        title: "Spicy Masala Makhana Chaat",
        description: "A tangy and spicy street-style chaat made with roasted Masala Makhana, onions, tomatoes, and chutneys.",
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
        time: "10 mins",
        calories: "120 kcal"
    },
    {
        id: 2,
        title: "Creamy Makhana Kheer",
        description: "A traditional Indian dessert pudding made with fox nuts, milk, saffron, and nuts. Low calorie and delicious.",
        gradient: "linear-gradient(135deg, #F5E6CA 0%, #FFE66D 100%)",
        time: "25 mins",
        calories: "200 kcal"
    },
    {
        id: 3,
        title: "Makhana Smoothie Bowl",
        description: "Power-packed breakfast smoothie topped with crushed mint makhana for that extra crunch.",
        gradient: "linear-gradient(135deg, #4ECDC4 0%, #2ECC71 100%)",
        time: "5 mins",
        calories: "180 kcal"
    },
    {
        id: 4,
        title: "Roasted Caramel Makhana",
        description: "Sweet, crunchy, and addictive. The perfect movie night snack without the guilt of popcorn.",
        gradient: "linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)",
        time: "15 mins",
        calories: "140 kcal"
    }
];

const Recipes = () => {
    return (
        <div className="recipes-page">
            <header className="recipes-header">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Culinary Creations
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Discover delicious ways to enjoy your favorite superfood.
                </motion.p>
            </header>

            <div className="recipes-grid">
                {recipes.map((recipe, index) => (
                    <motion.div
                        key={recipe.id}
                        className="recipe-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="recipe-image-container" style={{ background: recipe.gradient }}>
                            {/* <img src={recipe.image} alt={recipe.title} className="recipe-image" /> */}
                            <div className="recipe-overlay">
                                <span className="recipe-time">{recipe.time}</span>
                            </div>
                        </div>
                        <div className="recipe-content">
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <div className="recipe-footer">
                                <span className="calories">{recipe.calories}</span>
                                <button className="read-more">View Recipe</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
