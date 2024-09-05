const DropDown: React.FC<{
  func: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ func }) => {
  return (
    <>
      <div>
        <select
          onChange={(e) => func(e)}
          name="HeadlineAct"
          id="HeadlineAct"
          className="p-1 w-full rounded border  text-white sm:text-sm bg-transparent "
        >
          <option className="bg-neutral " value="">
            Please select
          </option>
          <optgroup className="bg-neutral " label="">
            <option value="cod">Cash on delivery</option>
          </optgroup>
        </select>
      </div>
    </>
  );
};

export default DropDown;
