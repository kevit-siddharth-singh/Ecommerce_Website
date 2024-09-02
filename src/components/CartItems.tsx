import { CartItem } from "../Redux/Slices/cartSlice";

const CartItems: React.FC<{
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}> = ({ items, totalAmount, totalQuantity }) => {
  return (
    <div>
      <ul className="flex flex-col gap-2 p-10">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col">
            <img src={item.image} alt={item.name} />
            <div className="item-data">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
            <div className="divider"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
