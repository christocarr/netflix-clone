import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles'
import {FirebaseContext} from './context/firebase'

// import { seedDatabase } from './seed';

const firebaseConfig = {
  apiKey: "AIzaSyCVSymSIc4c-Ekj9aZ8dmmdnMLtgbB0Ygg",
  authDomain: "scrimba-netflix-clone.firebaseapp.com",
  databaseURL: "https://scrimba-netflix-clone.firebaseio.com",
  projectId: "scrimba-netflix-clone",
  storageBucket: "scrimba-netflix-clone.appspot.com",
  messagingSenderId: "886555523939",
  appId: "1:886555523939:web:587c143aaf5bda9249b156"
}

const firebase = window.firebase.initializeApp(firebaseConfig)
// seedDatabase(firebase)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);