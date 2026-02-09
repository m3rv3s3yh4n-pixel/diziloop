<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, query, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBaPTs9mx419qrHrFIlK_jCpT8FdiQfUGE",
    authDomain: "diziloop.firebaseapp.com",
    projectId: "diziloop",
    storageBucket: "diziloop.firebasestorage.app",
    messagingSenderId: "71716151612",
    appId: "1:71716151612:web:f6abcbd6824292e5817e39"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window._db = db;
  window._fs = { collection, addDoc, getDocs, doc, updateDoc, query, where, serverTimestamp };
</script>
