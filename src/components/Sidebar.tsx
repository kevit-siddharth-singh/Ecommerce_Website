import { useQuery } from "@tanstack/react-query";
import { productCategory } from "../utils/getProductsCategory";
import Checkboxes from "./Checkboxes";

const Sidebar = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: productCategory,
  });

  let content = (
    <p className=" flex justify-center items-center mt-5  ">
      Categories loading...
    </p>
  );

  if (categories) {
    content = (
      <ul className=" max-sm:flex-wrap  max-md:flex max-md:w-full max-md:overflow-hidden    sm:p-3 sm:justify-between ">
        {categories.map((category: string, idx: number) => (
          <li key={idx}>
            <Checkboxes category={category} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="  max-md:w-full max-md:overflow-hidden ">
      <p className="text-white max-sm:ml-2 text-3xl sm:m-4 font-semibold">
        {categories ? "Filters" : ""}
      </p>
      {/* Category Section */}
      <div className="categories max-md:w-full max-md:overflow-hidden">
        <p className="sm:m-4 text-xl text-orange-500 max-md:hidden">
          Choose categories :{" "}
        </p>

        {content}
      </div>
      <div className="hidden">
        {/* Price Section */}
        <p className="m-4 text-xl text-orange-500 max-md:hidden ">
          Select Price :{" "}
        </p>
        <p className="m-4 max-md:hidden">Data....</p>
      </div>
    </div>
  );
};

export default Sidebar;
