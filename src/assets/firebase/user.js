import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let user = {
  signIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  },
};

export default user;
