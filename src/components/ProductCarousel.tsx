const ProductCarousel: React.FC<{ img: string }> = ({ img }) => {
  return (
    <>
      <div className="carousel w-full h-full rounded-box bg-white">
        <div id="item1" className="carousel-item w-full ">
          <img title="product-image" src={img} className="w-full  object-contain" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://avatars.githubusercontent.com/u/85176765?v=4"
            className="w-full object-contain"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a
          href="#item1"
          className="btn btn-sm  bg-zinc-200 hover:text-white hover:bg-black  text-black"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-sm bg-zinc-200 hover:text-white hover:bg-black  text-black"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn btn-sm bg-zinc-200 hover:text-white hover:bg-black  text-black"
        >
          3
        </a>
        <a
          href="#item4"
          className="btn btn-sm bg-zinc-200 hover:text-white hover:bg-black  text-black"
        >
          4
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
