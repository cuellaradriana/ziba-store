import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCmR_YtUQgsW4mOyfnwgW6wcWbQLArbgBE',
    authDomain: 'ziba-ecommerce-ch.firebaseapp.com',
    projectId: 'ziba-ecommerce-ch',
    storageBucket: 'ziba-ecommerce-ch.firebasestorage.app',
    messagingSenderId: '28296368116',
    appId: '1:28296368116:web:bc2945fbf90ef6b70bf3a1',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
export default db;
