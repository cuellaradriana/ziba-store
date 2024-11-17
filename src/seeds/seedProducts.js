import { addDoc, collection } from 'firebase/firestore';
import db from '../db/db.js';
import { products } from './dataToSeed.js';

const seedProducts = () => {
    const productsRef = collection(db, 'products');
    products.map((product) => {
        addDoc(productsRef, product);
    });
    return;
};

seedProducts();
