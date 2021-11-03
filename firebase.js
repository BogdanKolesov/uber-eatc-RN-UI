import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyBEFlD1xGbL3eoua2RVeVIipJ0QTFkNN4k",
    authDomain: "rn-ubereats-ui.firebaseapp.com",
    projectId: "rn-ubereats-ui",
    storageBucket: "rn-ubereats-ui.appspot.com",
    messagingSenderId: "707916200454",
    appId: "1:707916200454:web:395b848a1cd550e06ca187"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase