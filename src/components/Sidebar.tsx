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
      {/* Category Section */}
      {content}
      {/* Price Section */}
    </div>
  );
};

export default Sidebar;
