import Email from "../../Components/Email";
import Password from "../../Components/Password";
import Send from "../../Components/Send";
import Nav from "../../Components/Nav";
import WelcomeText from '../../Components/WelcomeText'
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
// import { useAuth } from '../../Provider/Auth'
import { useState } from "react";

const SignIn = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [isSignIn, setIsSignIn] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')

  // // const {userLoggedIn} = useAuth()

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   if(!isSignIn){
  //     setIsSignIn(true)
  //     await doCreateUserWithEmailAndPassword(email, password)
  //   }
  // }

  return (
    <>
      <Nav />

      <form className="flex justify-center items-center gap-16 flex-col">
        <WelcomeText welcomeText="Введіть дані для входу в акаунт"/>
        <div className="flex justify-center items-center gap-5 flex-col">
          <Email />
          <Password />
        </div>

        <Send />
      </form>
    </>
  );
};

export default SignIn;
