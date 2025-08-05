import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Signup Logic
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
}

// Login Logic
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

// Auth State & Redirect
onAuthStateChanged(auth, user => {
  const path = window.location.pathname;
  const isDashboard = path.includes("dashboard.html");

  if (user) {
    // Logged in
    if (!isDashboard && (path.includes("login") || path.includes("signup"))) {
      window.location.href = "dashboard.html";
    }

    // If on dashboard, show email
    if (isDashboard && document.getElementById('user-email')) {
      document.getElementById('user-email').textContent = `Logged in as: ${user.email}`;
    }

  } else {
    // Not logged in
    if (isDashboard) {
      alert("You must be logged in.");
      window.location.href = "login.html";
    }
  }
});

// Logout Logic
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
      alert("Logged out successfully.");
      window.location.href = "login.html";
    });
  });
}
