const BreadCrumbs: React.FC<{ product: string }> = ({ product }) => {
  return (
    <>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>{product}</li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
