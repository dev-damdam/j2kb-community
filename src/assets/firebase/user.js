import router from "@/router";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";

import { getDatabase, ref, set, remove } from "firebase/database";

let user = {
  signIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  },
  register(email, password, nickname) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            const user = auth.currentUser;
            // add user in db
            this.addUser(user.uid, email, nickname);
            this.signOut();
          })
          .catch((error) => {
            this.delete(auth.currentUser);
            console.log(error.code);
          });
      })
      .catch((error) => {
        this.delete(auth.currentUser);
        console.log(error.code);
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
    const auth = getAuth();
    signOut(auth)
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
    const db = getDatabase();
    set(ref(db, "users/" + uid), {
      nickname: nickname,
      email: email,
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
    const db = getDatabase();
    remove(ref(db, "users/" + uid))
      .then(() => {
        console.log("Successful remove user");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Failed remove user");
      });
  },
};

export default user;
