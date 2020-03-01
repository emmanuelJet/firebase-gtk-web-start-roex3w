// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
// var firebaseConfig = {};
const firebaseConfig = {
    apiKey: "AIzaSyBHye2GyaYLikXnRwaHe6SusmP0UEy_dQg",
      authDomain: "emmanueljet-fgtk.firebaseapp.com",
        databaseURL: "https://emmanueljet-fgtk.firebaseio.com",
          projectId: "emmanueljet-fgtk",
            storageBucket: "emmanueljet-fgtk.appspot.com",
              messagingSenderId: "152233201920",
                appId: "1:152233201920:web:59699b963cfd4e92bce3e5",
                  measurementId: "G-97NKW0VDBN"
                  };
}

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
