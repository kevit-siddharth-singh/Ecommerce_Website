import AddressForm from "../components/AddressForm";
import CheckoutItemDetails from "../components/CheckoutItemDetails";
import OrderSummary from "../components/OrderSummary";

const CheckOutPage = () => {
  return (
    <div className="flex flex-col items-center px-4 py-1 ">
      <h1 className="text-orange-500 text-5xl font-semibold mt-[2rem]">
        Checkout Page
      </h1>
      <p className="text-white text-3xl mb-2">Review your order</p>
      <div className="reviewProduct  gap-5 flex justify-between  ">
        <div className="demographic-info flex flex-col gap-3 ">
          <AddressForm />
          <CheckoutItemDetails />
        </div>
        <div className="ProductDetail border p-3 rounded ">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
