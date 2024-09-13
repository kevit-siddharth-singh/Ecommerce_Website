import {
  useQuery,
  useAppSelector,
  Header,
  Loading,
  useTitleChangeHook,
  fetchProduct,
  Product,
  Sidebar,
  NoProductFound,
  ProductPageContent,
} from "../Imports/ProductListImport";

const ProductList = () => {
  // Custom Hook For Changing Title
  useTitleChangeHook({ title: "S K Y - S H O P" });
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  const { data = [] } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProduct(currentPage),
  });

  const selectedCategory = useAppSelector(
    (state) => state.category.selectedCategory
  );

  const search = useAppSelector((state) => state.search.search);

  // Logic for Filtering Products based on Selected Category and Search Term
  const filteredData = data.filter((product) => {
    // Check if the product's category matches the selected categories (if any)
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);

    // Check if the product title matches the search term
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  let content = <Loading />;

  // Logic for Making the Parent Container Div to be Relative or not
  let isRelative = undefined;

  if (search.length > 0) {
    isRelative = "relative";
  }

  if (filteredData && filteredData.length > 0) {
    content = (
      <div className="flex flex-wrap md:gap-10 max-sm:gap-10 gap-14 w-full my-5 justify-center items-center">
        {filteredData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    if (search.length > 0) {
      content = <NoProductFound search={search} />;
    } else {
      content = (
        <p className="flex items-center justify-center h-screen w-screen text-">
          Loading...
        </p>
      );
    }
  }

  return (
    <div className="w-full sm:h-screen max-sm:h-screen h-full overflow-hidden  ">
      <Header />
      <div
        className={`flex ${isRelative} max-sm:justify-between   max-md:flex-col h-full w-full `}
      >
        <div className="sidebar-wrapper max-sm:w-full  max-sm:h-[20%] md:w-1/6 w-full sm:flex">
          <Sidebar />
        </div>
        {search === "" && !data ? (
          <Loading />
        ) : (
          <ProductPageContent content={content} search={search} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
