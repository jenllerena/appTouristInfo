import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/storage";


const devConfig = {
    apiKey: "AIzaSyBiN9efVlv8Tm6Nooj8xsMzcvOs-ntWxR0",
    authDomain: "peruhop-busnotification-app.firebaseapp.com",
    databaseURL: "https://peruhop-busnotification-app.firebaseio.com",
    projectId: "peruhop-busnotification-app",
    storageBucket: "peruhop-busnotification-app.appspot.com",
    messagingSenderId: "1076386029334"
};

firebase.initializeApp(devConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();

let pageLoaded = false;
pageLoaded && document.location.reload(true);
pageLoaded = true;

export {
    storage,
    firestore,
};
