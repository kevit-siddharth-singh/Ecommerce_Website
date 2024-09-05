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
      <ul>
        {categories.map((category: string, idx: number) => (
          <li key={idx}>
            <Checkboxes category={category} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p className="text-white text-3xl m-4 font-semibold">Filters</p>
      {/* Category Section */}
      <div className="categories">
        <p className="m-4 text-xl text-orange-500 ">Choose categories : </p>
        {content}
      </div>
      {/* Price Section */}
      <p className="m-4 text-xl text-orange-500 ">Select Price : </p>
      <p className="m-4">Data....</p>
    </div>
  );
};

export default Sidebar;
