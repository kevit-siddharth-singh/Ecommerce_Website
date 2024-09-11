import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useNavigate } from "react-router-dom";

const CartProductsCheckout = () => {
  const checkoutData = useAppSelector((state) => state.checkout);
  const cartData = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(checkoutData);

  useLayoutEffect(() => {
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
                    className="bg-transparent border rounded"
                    id="address"
                  />
                  <label className="address text-white font-semibold">
                    *Name :
                  </label>
                  <input
                    onChange={handleName}
                    type="text"
                    className="bg-transparent border rounded p-2"
                  />
                  <label className="address text-white font-semibold">
                    *Phn no :
                  </label>
                  <input
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
                <div className=" h-[15rem] border rounded p-2 flex flex-col gap-2  overflow-hidden overflow-y-scroll ">
                  {cartData.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div
                        onClick={() => navigate("/product/" + item.id)}
                        className="w-[4.5rem] h-[4.5rem] cursor-pointer bg-white rounded overflow-hidden"
                      >
                        <img
                          className="object-cover"
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                        />
                      </div>
                      <div className="text-sm">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/5 overflow-hidden ">
              <p className="text-3xl text-white">Order summary</p>
              <div className="flex flex-col gap-4 border rounded p-2 ">
                <p className="text-white font-semibold">
                  {cartData.items.length > 1 ? "Items : " : "Item : "}
                  {cartData.items.map((item) => (
                    <div>
                      <span className="text-xs font-normal">{item.name}</span>
                      <br />
                    </div>
                  ))}
                </p>
                <p className="text-white font-semibold">
                  Name :{" "}
                  <span className="text-orange-400">{checkoutData.name}</span>
                </p>
                <p className="text-white font-semibold">
                  Phn no :{" "}
                  <span className="text-orange-400">{checkoutData.phn}</span>
                </p>
                <p className="text-white font-semibold text-wrap w-full">
                  Address :{" "}
                  <span className="text-orange-400 truncate">
                    {checkoutData.address}
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
          <button className="bg-orange-500 active:bg-orange-600 p-3 rounded text-white font-semibold ">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductsCheckout;
