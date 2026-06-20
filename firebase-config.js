// =====================================================================
//  GREEN HEAVEN — Firebase কনফিগারেশন
//  ---------------------------------------------------------------------
//  ⚠️  নিচের firebaseConfig অবজেক্টের ভেতরের মানগুলো আপনার নিজের Firebase
//      প্রজেক্টের কী (key) দিয়ে রিপ্লেস করুন।
//      কোথায় পাবেন তা SETUP-GUIDE.md ফাইলে ধাপে ধাপে দেওয়া আছে।
//
//  নোট: এই কী-গুলো গোপন কিছু নয়; ওয়েব Firebase অ্যাপে এগুলো পাবলিক থাকাই
//       স্বাভাবিক। আসল নিরাপত্তা আসে Firestore Security Rules থেকে
//       (firestore.rules ফাইল দেখুন)।
// =====================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔻🔻🔻 এখানে আপনার নিজের প্রজেক্টের তথ্য বসান 🔻🔻🔻
const firebaseConfig = {
  apiKey: "AIzaSyDBZHOIexTO60ad1rh_0m7pnZnM4El2h6w",
  authDomain: "greenheavensuperhostel-a5759.firebaseapp.com",
  projectId: "greenheavensuperhostel-a5759",
  storageBucket: "greenheavensuperhostel-a5759.firebasestorage.app",
  messagingSenderId: "237838073266",
  appId: "1:237838073266:web:1fa0322392a33c12f538ab",
  measurementId: "G-Q70FB1XJBT"
};
// 🔺🔺🔺 এখানে আপনার নিজের প্রজেক্টের তথ্য বসান 🔺🔺🔺

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// সোশ্যাল লগইন প্রোভাইডার
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// প্রতিবার অ্যাকাউন্ট বাছাই করার সুযোগ দিতে
googleProvider.setCustomParameters({ prompt: 'select_account' });
facebookProvider.addScope('email');
