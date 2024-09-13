import React, { useState, useEffect } from "react";
import { AuthenticateState } from "../Redux/Slices/authenticateSlice";

interface CheckoutDemographicType {
  userData: AuthenticateState;
  handleAddress: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleModeOfPayment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CartProductsCheckoutDemographic: React.FC<CheckoutDemographicType> = ({
  userData,
  handleAddress,
  handleName,
  handlePhn,
  handleModeOfPayment,
}) => {
  const [formData, setFormData] = useState({
    address: userData.address || "",
    name: userData.name || "",
    phone: userData.phone || "",
    modeOfPayment: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [debouncedValue, setDebouncedValue] = useState(formData);

  // Debouncing effect for form data changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(formData);
    }, 300); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [formData]);

  // Effect to validate inputs after debounced value changes
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  // Function to validate form fields
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!debouncedValue.address.trim())
      newErrors.address = "Address is required.";
    if (!debouncedValue.name.trim()) newErrors.name = "Name is required.";
    if (!debouncedValue.phone.trim())
      newErrors.phone = "Phone number is required.";
    if (!debouncedValue.modeOfPayment.trim())
      newErrors.modeOfPayment = "Please select a payment method.";

    setErrors(newErrors);
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Call respective external handler
    switch (name) {
      case "address":
        handleAddress(e as React.ChangeEvent<HTMLTextAreaElement>);
        break;
      case "name":
        handleName(e as React.ChangeEvent<HTMLInputElement>);
        break;
      case "phone":
        handlePhn(e as React.ChangeEvent<HTMLInputElement>);
        break;
      case "modeOfPayment":
        handleModeOfPayment(e as React.ChangeEvent<HTMLSelectElement>);
        break;
    }
  };

  return (
    <div>
      <div>
        <p className="text-2xl sm:text-3xl text-white">Review</p>
        <div className="flex flex-col gap-2 border rounded p-5 ">
          {/* Address Input */}
          <label className="address text-white font-semibold">
            *Shipping address:
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="bg-transparent border rounded p-1"
            placeholder="Enter shipping address"
            id="address"
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}

          {/* Name Input */}
          <label className="address text-white font-semibold">*Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            className="bg-transparent border rounded p-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          {/* Phone Input */}
          <label className="address text-white font-semibold">*Phone No:</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            type="tel"
            className="bg-transparent border rounded p-2"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          {/* Payment Method Select */}
          <label
            htmlFor="modeofpyament"
            className="address text-orange-500 font-semibold"
          >
            *Select mode of payment:
          </label>
          <select
            name="modeOfPayment"
            value={formData.modeOfPayment}
            onChange={handleInputChange}
            className="bg-transparent p-2 text-white border rounded border-orange-400"
            id="modeofpyament"
          >
            <option className="bg-black" value="">
              Please Select
            </option>
            <option className="bg-black" value="cod">
              Cash on delivery
            </option>
          </select>
          {errors.modeOfPayment && (
            <p className="text-red-500">{errors.modeOfPayment}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductsCheckoutDemographic;
