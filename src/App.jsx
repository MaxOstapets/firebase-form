// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase/firebase.js";

import Pages from "./Routes";

function App() {
  // const email = "shuhara@gmail.com"
  // const password = "tynikto123"

  // const func = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // }
  // return <><button onClick={func}>Hello</button></>;
  return <Pages />
}

export default App;
