import DropDown from "./DropDown";
import Input from "./Input";

const AddressForm = () => {
  return (
    <>
      <div className="section-1 border border-white/60 p-3 rounded flex justify-around gap-5">
        <div className="flex flex-col gap-2 p-5">
          <p className="text-white text-lg font-semibold">
            *Shipping address :
          </p>
          <textarea
            required
            name="address"
            id="address"
            className="bg-transparent border p-1  text-white border-white/60 rounded"
          ></textarea>
          <p className="text-white text-lg font-semibold">*Name :</p>
          <Input placeholder="Type your name" type={"text"} />
          <p className="text-white text-lg font-semibold">*Phn no :</p>
          <Input placeholder="Enter phone number" type={"tel"} />
        </div>
        <div className="payment-mode  p-5">
          <p className="mb-2 text-orange-400 text-lg font-semibold">
            *Select Payment mode :
          </p>
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
