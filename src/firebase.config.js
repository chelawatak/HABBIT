import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO2uIckzhXcV_ZvgKJkXx2JqrQFcfsZhM",
  authDomain: "habbit-88101.firebaseapp.com",
  databaseURL: "https://habbit-88101-default-rtdb.firebaseio.com",
  projectId: "habbit-88101",
  storageBucket: "habbit-88101.appspot.com",
  messagingSenderId: "33248615483",
  appId: "1:33248615483:web:12d0ba3e45c42d1819501e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
