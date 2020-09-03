import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles'
import {FirebaseContext} from './context/firebase'

const config = {
  apiKey: 'AIzaSyCVSymSIc4c-Ekj9aZ8dmmdnMLtgbB0Ygg',
  authDomain: 'scrimba-netflix-clone.firebaseapp.com',
  databaseURL: 'https://scrimba-netflix-clone.firebaseio.com',
  projectId: 'scrimba-netflix-clone',
  storageBucket: 'scrimba-netflix-clone.appspot.com',
  messagingSenderId: '886555523939',
  appId: '1:886555523939:web:587c143aaf5bda9249b156',
}

// The core Firebase JS SDK is always required and must be listed first
// <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCVSymSIc4c-Ekj9aZ8dmmdnMLtgbB0Ygg",
//     authDomain: "scrimba-netflix-clone.firebaseapp.com",
//     databaseURL: "https://scrimba-netflix-clone.firebaseio.com",
//     projectId: "scrimba-netflix-clone",
//     storageBucket: "scrimba-netflix-clone.appspot.com",
//     messagingSenderId: "886555523939",
//     appId: "1:886555523939:web:587c143aaf5bda9249b156"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);