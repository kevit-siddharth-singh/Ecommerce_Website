import { useDispatch } from "react-redux";
import NoProductFoundImg from "/noproductfound.png";
import { searchActions } from "../Redux/Slices/SearchSlice";

const NoProductFound: React.FC<{ search: string }> = ({ search }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col w-full h-full overflow-hidden  justify-center items-center max-sm:gap-4 ">
        <div className="img md:w-1/4  max-sm:w-4/5 ">
          <img
            className="w-full cover"
            src={NoProductFoundImg}
            alt="No Product Found"
          />
        </div>
        <p className="text-orange-500 text-center md:text-3xl  sm:shrink-0">
          No products found matching "{search}".
        </p>
        <button
          onClick={() => dispatch(searchActions.setSearchTerm(""))}
          className="m-2 border  border-purple-500 rounded p-2 text-purple-400 hover:bg-purple-500 hover:text-white shrink-0"
        >
          Clear Result
        </button>
      </div>
    </>
  );
};

export default NoProductFound;
