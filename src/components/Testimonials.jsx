import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Yoga Instructor",
        location: "Mumbai",
        text: "I've replaced my evening biscuits with Makhana Magic. It's so light yet keeps me full. The Masala flavor is my absolute favorite!",
        rating: 5
    },
    {
        id: 2,
        name: "Arjun Mehta",
        role: "Software Engineer",
        location: "Bangalore",
        text: "Sitting at a desk all day makes you crave snacks. This is the guilt-free crunch I needed. Love the premium packaging too!",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Nutritionist",
        location: "London",
        text: "As a nutritionist, I often recommend fox nuts. Makhana Magic has nailed the roasting process - perfectly crunchy without being oily.",
        rating: 5
    },
    {
        id: 4,
        name: "Rahul Verma",
        role: "Fitness Enthusiast",
        location: "Delhi",
        text: "The protein content is a game changer for my post-workout munchies. Finally, a snack that tastes good and does good.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Love from our Community</h2>
                    <p>See why thousands are switching to the crunchier side of life.</p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="quote-icon">❝</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <span className="role">{review.role}, {review.location}</span>
                                </div>
                                <div className="rating">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
