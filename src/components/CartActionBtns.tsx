const CartActionBtns = () => {
  return (
    <div className="btn-wrapper my-3 text-white flex gap-10">
      <button className="bg-emerald-500 py-3 px-10 rounded text-xl font-medium">
        Add to cart
      </button>
      <div>
        <button className="bg-white py-3 px-10 rounded text-xl font-medium">
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default CartActionBtns;
