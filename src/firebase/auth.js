import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    console.log("Email", email);
    console.log("Password", password);

    return createUserWithEmailAndPassword(auth, email, password)
}