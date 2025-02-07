import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyAkcu5YpQrPhCfkQkTt9C8bzPlKYgEUWSQ",
    authDomain: "x-clone-tweex.firebaseapp.com",
    projectId: "x-clone-tweex",
    storageBucket: "x-clone-tweex.firebasestorage.app",
    messagingSenderId: "791805456878",
    appId: "1:791805456878:web:bef131ae6755443a219eff"
};
      
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleSignInButton = document.getElementById('google-sign-in');

googleSignInButton.addEventListener('click', () => {
    provider.setCustomParameters({
        prompt: "select_account"  
    });

    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        window.location.href = './TwitterClone.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing in: ", errorMessage);
    });
});