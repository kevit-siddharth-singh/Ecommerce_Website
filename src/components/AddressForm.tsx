import { useLayoutEffect, useState } from "react";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import DropDown from "./DropDown";
import Input from "./Input";

const AddressForm = () => {
  const dispatch = useAppDispatch();
  const checkoutData = useAppSelector((state) => state.checkout);
  const userData = useAppSelector((state) => state.authentication);

  // Error state for handling validation messages
  const [errors, setErrors] = useState({
    address: "",
    name: "",
    phone: "",
    paymentMode: "",
  });

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
  }, [checkoutData, dispatch, userData]);

  const validateInput = (field: string, value: string) => {
    let errorMessage = "";
    if (field === "address" && (!value || value.length < 6)) {
      errorMessage = "Please enter a valid address (at least 6 characters).";
    } else if (field === "name" && (!value || value.length < 3)) {
      errorMessage = "Please enter a valid name (at least 3 characters).";
    } else if (field === "phone" && (!value || value.length < 9)) {
      errorMessage =
        "Please enter a valid phone number (at least 9 characters).";
    } else if (field === "paymentMode" && !value) {
      errorMessage = "Please select a payment mode.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
  };

  const handleAddress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(checkoutActions.changeAddress(e.target.value));
    validateInput("address", e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkoutActions.changeName(e.target.value));
    validateInput("name", e.target.value);
  };

  const handlePhn = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkoutActions.changePhn(e.target.value));
    validateInput("phone", e.target.value);
  };

  const handleModeOfPayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(checkoutActions.changeModeOfPayment(e.target.value));
    validateInput("paymentMode", e.target.value);
  };

  return (
    <>
      <div className="section-1 w-full max-sm:gap-2 border border-white/60 sm:p-3 rounded flex justify-around max-sm:p-2 max-sm:text-sm sm:gap-5 ">
        <div className="flex flex-col max-sm:gap-2 sm:gap-2 sm:p-5 w-1/2">
          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Shipping address:
          </p>
          <textarea
            onChange={handleAddress}
            required
            name="address"
            id="address"
            placeholder={
              checkoutData.address.length > 0
                ? checkoutData.address
                : userData.address
            }
            className="bg-transparent border p-1 text-white border-white/60 rounded"
          ></textarea>
          {errors.address && <p className="text-red-500">{errors.address}</p>}

          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Name:
          </p>
          <Input
            placeholder={
              checkoutData.name.length > 0 ? checkoutData.name : userData.name
            }
            type={"text"}
            func={handleName}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <p className="text-white max-sm:text-sm  sm:text-lg font-semibold">
            *Phn no:
          </p>
          <Input
            placeholder={
              checkoutData.phn.length > 0 ? checkoutData.phn : userData.phone
            }
            type="tel"
            func={handlePhn}
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div className="payment-mode  max-sm:text-sm  sm:p-5 w-full">
          <p className="sm:mb-2 text-orange-400 sm:text-lg font-semibold">
            *Select Payment mode:
          </p>
          <DropDown func={handleModeOfPayment} />
          {errors.paymentMode && (
            <p className="text-red-500">{errors.paymentMode}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressForm;
