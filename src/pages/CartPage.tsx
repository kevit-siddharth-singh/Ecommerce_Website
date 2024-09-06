import CartItems from "../components/CartItems";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";
import { useAppSelector } from "../Redux/store";

const CartPage = () => {
  // Custom Hook For Changing Title
  useTitleChangeHook({ title: "Cart " });

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
