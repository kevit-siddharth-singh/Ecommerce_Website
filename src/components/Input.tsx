const Input: React.FC<{
  placeholder: string;
  type: string;

  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, type, func }) => {
  return (
    <>
      <input
        onChange={(e) => func(e)}
        className=" bg-transparent border border-white/60 rounded p-1"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
