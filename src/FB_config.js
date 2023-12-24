const firebaseConfig = {
    apiKey: "AIzaSyBheqXL0ilO3z1SxwL9ObvUGNAggbx1SNs",
    authDomain: "pnv3-2.firebaseapp.com",
    projectId: "pnv3-2",
    storageBucket: "pnv3-2.appspot.com",
    messagingSenderId: "25946939686",
    appId: "1:25946939686:web:096b4592f56badfebce1e7"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
const db = firebase.firestore();
