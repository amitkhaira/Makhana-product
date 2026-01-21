import masalaImg from '../assets/masala.png';
import mintImg from '../assets/mint.png';
import saltyImg from '../assets/salty.png';

export const products = [
    {
        id: 'masala',
        name: 'Spicy Masala',
        image: masalaImg,
        description: 'A fiery blend of spices that ignites your taste buds. Perfect for spice lovers looking for a healthy kick.',
        nutrition: { calories: 120, protein: 4, fat: 5, carbs: 18, fiber: 3 }, // Numeric for calculation
        color: 'var(--color-masala)',
        bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        accentColor: '#C0392B'
    },
    {
        id: 'mint',
        name: 'Zesty Mint',
        image: mintImg,
        description: 'Cool, refreshing mint flavor paired with the crunch of fox nuts. A breath of fresh air for your snack time.',
        nutrition: { calories: 115, protein: 4, fat: 4, carbs: 19, fiber: 3 },
        color: 'var(--color-secondary)',
        bgGradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
        accentColor: '#16A085'
    },
    {
        id: 'salty',
        name: 'Classic Salty',
        image: saltyImg,
        description: 'The timeless taste of lightly roasted makhana with a touch of rock salt. Simple, pure, and delicious.',
        nutrition: { calories: 110, protein: 4, fat: 3, carbs: 20, fiber: 3 },
        color: '#3498DB',
        bgGradient: 'linear-gradient(135deg, #3498DB 0%, #2C3E50 100%)',
        accentColor: '#2980B9'
    }
];
