import CartItems from "../components/CartItems";
import { useAppSelector } from "../Redux/store";

const CartPage = () => {
  // const dispatch = useAppDispatch();
  const { items, totalAmount, totalQuantity } = useAppSelector(
    (state) => state.cart
  );

  return (
    <div className="cartItem-wrapper">
      <CartItems
        items={items}
        totalAmount={totalAmount}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};

export default CartPage;
