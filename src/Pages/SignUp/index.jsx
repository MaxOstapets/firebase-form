import Email from "../../Components/Email";
import Password from "../../Components/Password";
import Send from "../../Components/Send";
import Nav from "../../Components/Nav";
import WelcomeText from "../../Components/WelcomeText";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChanger = (email) => {
    setEmail(email);
  };

  const handlePasswordChanger = (password) => {
    setPassword(password);
  };

  const onSubmit = async () => {
    doCreateUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <Nav />

      <div className="flex justify-center items-center gap-16 flex-col">
        <WelcomeText welcomeText="Введіть дані для реєстрації" />
        <div className="flex justify-center items-center gap-5 flex-col">
          <Email handleEmailChanger={handleEmailChanger} />
          <Password handlePasswordChanger={handlePasswordChanger} />
        </div>

        <Send onClick={onSubmit} />
      </div>
    </>
  );
};

export default SignUp;
