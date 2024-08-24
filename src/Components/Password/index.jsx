const Password = ({handlePasswordChanger}) => {
  return (
    <input
      type="text"
      placeholder="Password"
      className="w-96 h-14 bg-indigo-950 text-xl text-white p-4"
      onChange={(e) => handlePasswordChanger(e.target.value)}
    />
  );
};

export default Password;
