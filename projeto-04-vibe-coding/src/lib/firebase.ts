import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where, orderBy, onSnapshot, Timestamp, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getRemoteConfig, getValue, fetchAndActivate } from 'firebase/remote-config';

// Import the Firebase configuration
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const storage = getStorage(app);

// Analytics and Remote Config are optional and may not work in all environments
export let analytics: any = null;
export let remoteConfig: any = null;

if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
    remoteConfig = getRemoteConfig(app);
    
    // Set default values for Remote Config
    remoteConfig.defaultConfig = {
      'welcome_message': 'Bem-vindo ao ABNGrid!',
      'primary_color': '#0F172A'
    };
    
    // Fetch and activate remote config values
    fetchAndActivate(remoteConfig).catch(err => console.warn('Remote Config fetch failed:', err));
  } catch (err) {
    console.warn('Firebase Analytics/Remote Config initialization failed:', err);
  }
}

// Auth Helpers
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const logout = () => signOut(auth);

// Firestore Helpers
export const saveUserToFirestore = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    lastLogin: serverTimestamp(),
  }, { merge: true });
};

// Analytics Helper
export const trackEvent = (eventName: string, params?: object) => {
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
};

// Remote Config Helper
export const getRemoteValue = (key: string) => {
  if (remoteConfig) {
    return getValue(remoteConfig, key).asString();
  }
  return null;
};
