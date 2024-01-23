let firebaseConfig = {
    apiKey: "AIzaSyDGVIVCjgbd3vWCKBT17_uBqmqNxuFFqfg",
    authDomain: "blog-website-dc3b6.firebaseapp.com",
    projectId: "blog-website-dc3b6",
    storageBucket: "blog-website-dc3b6.appspot.com",
    messagingSenderId: "31621271330",
    appId: "1:31621271330:web:fc5561645c69be4ae4df7b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
