import Email from "../../Components/Email";
import Password from "../../Components/Password";
import Send from "../../Components/Send";
import Nav from "../../Components/Nav";
import WelcomeText from '../../Components/WelcomeText'

const SignIn = () => {
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
