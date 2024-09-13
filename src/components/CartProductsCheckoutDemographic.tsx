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
  return (
    <div>
      <div>
        <p className="text-2xl sm:text-3xl text-white">Review</p>
        <div className="flex flex-col gap-2 border rounded p-5 ">
          {/* Address, Name, Phone Input */}
          <label className="address text-white font-semibold">
            *Shipping address:
          </label>
          <textarea
            onChange={handleAddress}
            className="bg-transparent border rounded p-1"
            placeholder={userData.address}
            id="address"
          />
          <label className="address text-white font-semibold">*Name:</label>
          <input
            placeholder={userData.name}
            onChange={handleName}
            type="text"
            className="bg-transparent border rounded p-2"
          />
          <label className="address text-white font-semibold">*Phone No:</label>
          <input
            placeholder={userData.phone}
            onChange={handlePhn}
            type="tel"
            className="bg-transparent border rounded p-2"
          />
          {/* Payment Method Select */}
          <label
            htmlFor="modeofpyament"
            className="address text-orange-500 font-semibold"
          >
            *Select mode of payment:
          </label>
          <select
            onChange={handleModeOfPayment}
            className="bg-transparent p-2 text-white border rounded border-orange-400"
            name="mode of payment"
            id="modeofpyament"
          >
            <option className="bg-black" value="cod">
              Please Select
            </option>
            <option className="bg-black" value="cod">
              Cash on delivery
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartProductsCheckoutDemographic;
