const EmptyCartCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src="/public/empty-cart.png" alt="" />
      <h1 className="text-6xl text-orange-500 font-semibold">
        Your cart is empty!
      </h1>
      <button className="m-4 bg-orange-500 p-4 rounded text-3xl text-white active:bg-orange-600">
        Go back
      </button>
    </div>
  );
};

export default EmptyCartCard;
