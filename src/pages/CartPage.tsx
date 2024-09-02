import { cartActions } from "../Redux/Slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);
  console.log(cartData);
  return (
    <div
      onClick={() => {
        dispatch(
          cartActions.addItemToCart({
            id: 1,
            name: "siddhu",
            price: 30,
            quantity: 0,
          })
        );
      }}
    >
      CartPage
    </div>
  );
};

export default CartPage;
