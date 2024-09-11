import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import DropDown from "./DropDown";
import Input from "./Input";

const AddressForm = () => {
  const dispatch = useAppDispatch();

  const { address, name, phn } = useAppSelector((state) => state.checkout);
  const userData = useAppSelector((state) => state.authentication);

  function handleAddress(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(checkoutActions.changeAddress(e.target.value));
  }
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(checkoutActions.changeName(e.target.value));
  }
  function handlePhn(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(checkoutActions.changePhn(e.target.value));
  }
  function handleModeOfPayment(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(checkoutActions.changeModeOfPayment(e.target.value));
  }

  return (
    <>
      <div className="section-1 w-full max-sm:gap-2 border border-white/60 sm:p-3 rounded flex justify-around max-sm:p-2 max-sm:text-sm sm:gap-5 ">
        <div className="flex flex-col max-sm:gap-2 sm:gap-2 sm:p-5 w-1/2">
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Shipping address :
          </p>
          <textarea
            onChange={(e) => handleAddress(e)}
            required
            name="address"
            id="address"
            placeholder={address.length > 0 ? address : userData.address}
            value={address}
            className="bg-transparent border p-1  text-white border-white/60 rounded"
          ></textarea>
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Name :
          </p>
          <Input
            placeholder={name.length > 0 ? name : userData.name}
            value={name}
            type={"text"}
            func={handleName}
          />
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Phn no :
          </p>
          <Input
            placeholder={phn.length > 0 ? phn : userData.phone}
            type="tel"
            value={phn}
            func={handlePhn}
          />
        </div>
        <div className="payment-mode  max-sm:text-sm  sm:p-5 w-full">
          <p className="sm:mb-2 text-orange-400 sm:text-lg font-semibold">
            *Select Payment mode :
          </p>
          <DropDown func={handleModeOfPayment} />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
