import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 

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

const appleSignInButton = document.getElementById('apple-sign-in');

if (appleSignInButton) {
    appleSignInButton.addEventListener('click', () => {
        alert("Apple Sign-In is not available. Please sign in with Google.");
    });
}

const createAccountButton = document.querySelector('.primary-btn');
const accountFormContainer = document.getElementById('account-form-container');
const closeFormButton = document.getElementById('close-form');
const signupButton = document.getElementById('signup-btn');

createAccountButton.addEventListener('click', () => {
    accountFormContainer.style.display = 'flex';  
});

closeFormButton.addEventListener('click', () => {
    accountFormContainer.style.display = 'none';  
});

signupButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('Please fill in all the fields');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);

            updateProfile(user, {
                displayName: name
            }).then(() => {
                window.location.href = './TwitterClone.html';
            }).catch((error) => {
                console.error("Error updating profile:", error);
            });

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error creating user:", errorMessage);
            alert("Error creating account: " + errorMessage);
        });
});

const signinModal = document.getElementById("signin-modal");
const signinBtn = document.getElementById("signin-btn");
const closeBtn = document.querySelector(".close");
const signinForm = document.getElementById("signin-form");
const signinError = document.getElementById("signin-error");

signinBtn.addEventListener("click", () => {
    signinModal.style.display = "flex"; 
});

closeBtn.addEventListener("click", () => {
    signinModal.style.display = "none"; 
});

signinForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const email = document.getElementById("signIn-email").value;
    const password = document.getElementById("signIn-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "./twitterClone.html"; 
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("Errorrrr: ", error)
            signinError.textContent = "Error: " + errorMessage; 
        });
});