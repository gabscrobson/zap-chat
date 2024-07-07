// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'zap-chat-a0a03.firebaseapp.com',
  projectId: 'zap-chat-a0a03',
  storageBucket: 'zap-chat-a0a03.appspot.com',
  messagingSenderId: '153571087748',
  appId: '1:153571087748:web:a832bcaf233930f8b6f9d1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

console.log(app)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
