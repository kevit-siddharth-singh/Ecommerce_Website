const Input: React.FC<{ placeholder: string; type: string }> = ({
  placeholder,
  type,
}) => {
  return (
    <>
      <input
        className=" bg-transparent border border-white/60 rounded p-1"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
