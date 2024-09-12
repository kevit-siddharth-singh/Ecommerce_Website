import PaginationComponent from "./PaginationComponent";

const ProductPageContent: React.FC<{
  content: JSX.Element;
  search: string;
}> = ({ content, search }) => {
  return (
    <>
      <div className="product-wrapper flex flex-col md:w-5/6 w-full h-full  items-center sm:gap-5   ">
        <div className="w-full flex items-start  md:h-[80%] max-sm:h-[58%]  overflow-y-scroll  ">
          {content}
        </div>
        <div className="w-full max-sm:h-[37%] max-sm:py-1 flex justify-center items-center max-sm:items-start ">
          {search.length === 0 && <PaginationComponent />}
        </div>
      </div>
    </>
  );
};

export default ProductPageContent;
