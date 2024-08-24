const Email = ({handleEmailChanger}) => {
  return (
    <input
      type="text"
      placeholder="Email"
      className="w-96 h-14 bg-indigo-950 text-xl text-white p-4"
      onChange={(e) => handleEmailChanger(e.target.value)}
    />
  );
};

export default Email;
