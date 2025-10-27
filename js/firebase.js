  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAk-DPlnxxGp1KM4qp1QuFDbjFmvT0DKBM",
    authDomain: "smaxschoolsolutions.firebaseapp.com",
    projectId: "smaxschoolsolutions",
    storageBucket: "smaxschoolsolutions.firebasestorage.app",
    messagingSenderId: "567217534061",
    appId: "1:567217534061:web:bd670e6c6f4501df997b64",
    measurementId: "G-6BK7KYKZE4"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup
const signupForm = document.getElementById('signupForm');
if(signupForm){
  signupForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Signup successful!');
        signupForm.reset();
        window.location.href = 'index.html';
      })
      .catch(err => alert('Error: ' + err.message));
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Login success!');
        loginForm.reset();
        // redirect to dashboard or home
        window.location.href = 'dashboard.html';
      })
      .catch(err => alert('Login failed: ' + err.message));
  });
}