import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAY2IYaMJmlZgjDTveYegItFfJRLX5ozZQ',
    authDomain: "e-commerce-mosquella.firebaseapp.com",
    projectId: "e-commerce-mosquella",
    storageBucket: "e-commerce-mosquella.appspot.com",
    messagingSenderId: "546138265758",
    appId: "1:546138265758:web:3d8780763c7bdb232a838f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const firebaseAuth = getAuth(app);