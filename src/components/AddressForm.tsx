import { useLayoutEffect } from "react";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import DropDown from "./DropDown";
import Input from "./Input";

const AddressForm = () => {
  const dispatch = useAppDispatch();

  const checkoutData = useAppSelector((state) => state.checkout);
  const userData = useAppSelector((state) => state.authentication);

  useLayoutEffect(() => {
    if (userData) {
      if (userData.address.length > 6 && checkoutData.address.length === 0) {
        dispatch(checkoutActions.changeAddress(userData.address));
      }
      if (userData.name.length > 6 && checkoutData.name.length === 0) {
        dispatch(checkoutActions.changeName(userData.name));
      }
      if (userData.phone.length > 6 && checkoutData.phn.length === 0) {
        dispatch(checkoutActions.changePhn(userData.phone));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutData]);

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
            placeholder={
              checkoutData.address.length > 0
                ? checkoutData.address
                : userData.address
            }
            className="bg-transparent border p-1  text-white border-white/60 rounded"
          ></textarea>
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Name :
          </p>
          <Input
            placeholder={
              checkoutData.name.length > 0 ? checkoutData.name : userData.name
            }
            type={"text"}
            func={handleName}
          />
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Phn no :
          </p>
          <Input
            placeholder={
              checkoutData.phn.length > 0 ? checkoutData.phn : userData.phone
            }
            type="tel"
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
