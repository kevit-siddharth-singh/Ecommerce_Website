import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cartActions } from "../Redux/Slices/cartSlice";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";
import { FailedNotify, SuccessFullNotify } from "../utils/ToastNotify";
import { ToastContainer } from "react-toastify";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";

const CartProductsCheckout = () => {
  const [isValidated, setIsValidated] = useState(false);

  useTitleChangeHook({ title: "Checkout" });

  const checkoutData = useAppSelector((state) => state.checkout);
  const cartData = useAppSelector((state) => state.cart);
  const userData = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleAddProducts = () => {
    if (
      checkoutData.address.length >= 10 &&
      checkoutData.name.length >= 6 &&
      checkoutData.phn.length >= 9 &&
      checkoutData.modeofpayment === "cod"
    ) {
      console.log(checkoutData);
      cartData.items.map((item) => {
        dispatch(
          orderedProductsActions.addProduct({
            id: item.id,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
            title: item.name,
          })
        );
      });
      setIsValidated(true);
      SuccessFullNotify("Orders placed successfully");
    } else {
      FailedNotify("Please fill all the details!");
    }
  };

  useLayoutEffect(() => {
    if (cartData.items.length === 0) {
      navigate("/product");
    }

    dispatch(checkoutActions.reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="CartProductsCheckout flex  w-full py-5">
      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="wrapper flex flex-col justify-center items-center  w-full gap-4">
        <div>
          <h1 className="text-orange-500 max-sm:text-2xl max-sm:my-3 sm:text-5xl font-semibold tracking-wide ">
            CHECKOUT - PAGE
          </h1>
        </div>
        <div className="w-full ">
          <div className="flex justify-center w-full gap-5 overflow-hidden">
            <div className="flex flex-col w-2/5 gap-5 ">
              <div className="">
                <p className="text-3xl text-white">Review</p>
                <div className=" flex flex-col gap-2 border rounded p-5">
                  <label className="address text-white font-semibold">
                    *Shipping address :
                  </label>
                  <textarea
                    onChange={handleAddress}
                    className="bg-transparent border rounded p-1"
                    placeholder={userData.address}
                    id="address"
                  />
                  <label className="address text-white font-semibold">
                    *Name :
                  </label>
                  <input
                    placeholder={userData.name}
                    onChange={handleName}
                    type="text"
                    className="bg-transparent border rounded p-2"
                  />
                  <label className="address text-white font-semibold">
                    *Phn no :
                  </label>
                  <input
                    placeholder={userData.phone}
                    onChange={handlePhn}
                    type="tel"
                    className="bg-transparent border rounded p-2"
                  />
                  <label
                    htmlFor="modeofpyament"
                    className="address text-orange-500 font-semibold"
                  >
                    *Select mode of payment :
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
              <div className="overflow-hidden">
                <p className="text-3xl text-white">Product Selected</p>
                <div className=" h-[15rem] border rounded p-2 flex flex-col gap-5  overflow-hidden overflow-y-scroll ">
                  {cartData.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div
                        onClick={() => navigate("/product/" + item.id)}
                        className="  w-[7rem] h-[7rem] cursor-pointer bg-white rounded overflow-hidden"
                      >
                        <img
                          className="object-cover"
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                        />
                      </div>
                      <div className="text-md flex flex-col gap-1">
                        <p className="font-medium text-white ">
                          Name :
                          <span className=" text-orange-400"> {item.name}</span>
                        </p>
                        <p className="font-medium text-white">
                          Price : ₹
                          <span className="text-emerald-500">
                            {" "}
                            {item.price}
                          </span>
                        </p>
                        <p className="font-medium text-white">
                          Quantity :
                          <span className="text-emerald-500">
                            {" "}
                            {item.quantity}
                          </span>
                        </p>
                        <p className="font-medium text-white">
                          Total price : ₹
                          <span className="text-emerald-500">
                            {" "}
                            {item.quantity * item.price}
                          </span>
                        </p>
                        <div className="flex gap-3 justify-start items-center text-white font-medium">
                          <button
                            onClick={() =>
                              dispatch(cartActions.removeItemFromCart(item.id))
                            }
                            className="bg-red-500 p-1 px-3 rounded"
                          >
                            <FaMinus />
                          </button>
                          <button
                            onClick={() =>
                              dispatch(
                                cartActions.addItemToCart({
                                  id: item.id,
                                  image: item.image,
                                  name: item.name,
                                  price: item.price,
                                  quantity: item.quantity,
                                })
                              )
                            }
                            className="bg-blue-500 p-1 px-3 rounded"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/5 overflow-hidden ">
              <p className="text-3xl text-white">Order summary</p>
              <div className="flex flex-col gap-4 border rounded p-2 ">
                <div className="text-white font-semibold">
                  {cartData.items.length > 1 ? "Items : " : "Item : "}
                  {cartData.items.map((item) => (
                    <div key={item.id}>
                      <span className="text-xs font-normal">{item.name}</span>
                      <br />
                    </div>
                  ))}
                </div>
                <p className="text-white font-semibold">
                  Name :{" "}
                  <span className="text-orange-400">
                    {checkoutData.name.length > 0
                      ? checkoutData.name
                      : userData.address}
                  </span>
                </p>
                <p className="text-white font-semibold">
                  Phn no :{" "}
                  <span className="text-orange-400">
                    {checkoutData.phn ? checkoutData.phn : userData.phone}
                  </span>
                </p>
                <p className="text-white font-semibold text-wrap w-full">
                  Address :{" "}
                  <span className="text-orange-400 truncate">
                    {checkoutData.address
                      ? checkoutData.address
                      : userData.address}
                  </span>
                </p>
                <p className="text-white font-semibold">
                  Mode of Payment :{" "}
                  <span className="text-orange-400">
                    {checkoutData.modeofpayment}
                  </span>
                </p>
                <p className="text-white font-semibold">
                  Tax (GST / SGST) : <span className="text-red-500">18%</span>
                </p>
                <p className="text-white font-semibold">
                  Total Quantity :{" "}
                  <span className="text-orange-400">
                    {cartData.totalQuantity}
                  </span>
                </p>
                <p className="text-white font-semibold">
                  Total amount :{" "}
                  <span className="text-emerald-500">
                    {cartData.totalAmount}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <button
            onClick={() => navigate("/product")}
            className="bg-blue-500 active:bg-blue-600 p-3 rounded text-white font-semibold "
          >
            Go to products
          </button>
          <button
            onClick={handleAddProducts}
            className="bg-orange-500 active:bg-orange-600 p-3 rounded text-white font-semibold "
          >
            Buy now
          </button>
          <button
            onClick={() => navigate("/order")}
            className={`bg-emerald-500 active:bg-emerald-600 p-3 rounded text-white font-semibold ${
              isValidated ? "undefined" : "hidden"
            }`}
          >
            Go to Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductsCheckout;
