
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCZEmW4Ux-ZRSVGIYq7P8vmm3A9et7_oBw",
    authDomain: "semana-frontend-6d573.firebaseapp.com",
    projectId: "semana-frontend-6d573",
    storageBucket: "semana-frontend-6d573.appspot.com",
    messagingSenderId: "53635409260",
    appId: "1:53635409260:web:2318708c84d86cbaf07f49"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app