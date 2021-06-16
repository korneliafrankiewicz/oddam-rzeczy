import app from "firebase/app"
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6bXfSAlS27QfsnGYNFhNJFPKnAmomIBQ",
  authDomain: "oddamrzeczy-e5ec4.firebaseapp.com",
  projectId: "oddamrzeczy-e5ec4",
  storageBucket: "oddamrzeczy-e5ec4.appspot.com",
  messagingSenderId: "617098278530",
  appId: "1:617098278530:web:d86a9bbcb135770a1aa69b"
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

// export default Firebase;