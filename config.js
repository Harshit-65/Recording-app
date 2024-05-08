import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHxT8dXYgAvywmoZKuAMyUAJqM1VGG_n8",
  authDomain: "ent-detection-app.firebaseapp.com",
  projectId: "ent-detection-app",
  storageBucket: "ent-detection-app.appspot.com",
  messagingSenderId: "666986245803",
  appId: "1:666986245803:web:34f11a64430c3e4c3291ee",
  measurementId: "G-V1MB0N7C9C",
};

if (firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
