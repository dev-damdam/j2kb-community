import router from "@/router";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { ref, set, remove, get } from "firebase/database";

let user = {
  auth: null,
  db: null,

  setAuth() {
    this.auth = getAuth();
    setPersistence(this.auth, browserSessionPersistence);
  },
  setDB(db) {
    this.db = db;
  },

  signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  },
  register(email, password, nickname) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        sendEmailVerification(this.auth.currentUser)
          .then(() => {
            const user = this.auth.currentUser;
            // add user in db
            this.addUser(user.uid, email, nickname);
            this.signOut();
          })
          .catch((error) => {
            this.delete(this.auth.currentUser);
            console.log(error.code);
            console.log("Failed send email verification");
          });
      })
      .catch((error) => {
        this.delete(this.auth.currentUser);
        console.log(error.code);
        console.log("Failed create user with email password");
      });
  },
  updatePassword() {
    sendPasswordResetEmail(this.auth, this.auth.currentUser.email)
      .then(() => {
        // Password reset email sent!
        console.log("Success send password reset email");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed send password reset email");
      });
  },
  delete(user) {
    deleteUser(user)
      .then(() => {
        this.removeUser(user.uid);
        console.log("Successful delete user");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed delete user");
      });
  },
  signOut() {
    signOut(this.auth)
      .then(() => {
        console.log("Successful sign out");
        this.$router.push("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed sign out");
      });
  },
  addUser(uid, email, nickname) {
    set(ref(this.db, "users/" + uid), {
      nickname: nickname,
      email: email,
      register_date: new Date().toUTCString(),
    })
      .then(() => {
        console.log("Successful add user");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed add user");
      });
  },
  removeUser(uid) {
    remove(ref(this.db, "users/" + uid))
      .then(() => {
        console.log("Successful remove user");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed remove user");
      });
  },
  async getUserInfo(uid) {
    let user;
    const snapshot = await get(ref(this.db, "users/" + uid));
    user = {
      uid: uid,
      email: snapshot.val().email,
      nickname: snapshot.val().nickname,
      register_date: snapshot.val().register_date,
    };
    return user;
  },
};

export default user;
