import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDlfaE0e_YrIUcLAPw7vewJiRPErMG5Wxw",
  authDomain: "todolist-ed5c4.firebaseapp.com",
  projectId: "todolist-ed5c4",
  storageBucket: "todolist-ed5c4.appspot.com",
  messagingSenderId: "328234904770",
  appId: "1:328234904770:web:90169e93da64b484539f5b",
  measurementId: "G-P5XBTG1HWN"
};


export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)