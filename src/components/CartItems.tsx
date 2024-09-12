import { CartItem } from "../Redux/Slices/cartSlice";
import EmptyCartCard from "./EmptyCartCard";

import CartItemsContent from "./CartItemsContent";

const CartItems: React.FC<{
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}> = ({ items, totalAmount, totalQuantity }) => {
  // Redux App Dispatch

  return (
    <div className="flex justify-center ">
      {items.length !== 0 ? (
        <CartItemsContent
          items={items}
          totalQuantity={totalQuantity}
          totalAmount={totalAmount}
        />
      ) : (
        <EmptyCartCard />
      )}
    </div>
  );
};

export default CartItems;
