// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './config';

// TODO: Add SDKs for Firebase products that you want to use
// import {sigin} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;