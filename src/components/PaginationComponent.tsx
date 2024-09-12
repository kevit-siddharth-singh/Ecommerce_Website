import { paginationActions } from "../Redux/Slices/PaginationSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const PaginationComponent = () => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.pagination.currentPage);

  function handleNext() {
    if (currPage < 4) {
      dispatch(paginationActions.nextPage());
    }
  }

  function handlePrev() {
    if (currPage > 1) {
      dispatch(paginationActions.prevPage());
    }
  }

  return (
    <div className="join     flex justify-center sm:my-2 max-sm:w-1/2  h-2/3  sm:w-[20%] ">
      <button
        onClick={handlePrev}
        className={`join-item btn  w-1/3 bg-blue-500 hover:bg-blue-600 text-white  ${
          currPage === 1 ? "cursor-not-allowed" : "undefined"
        }`}
      >
        «
      </button>
      <div className="join-item btn  w-2/3 bg-blue-500 hover:bg-blue-600 text-white ">
        Page {currPage}
      </div>
      <button
        onClick={handleNext}
        className={`join-item btn  w-1/3 bg-blue-500 hover:bg-blue-600 text-white ${
          currPage === 4 ? "cursor-not-allowed" : "undefined"
        }`}
      >
        »
      </button>
    </div>
  );
};

export default PaginationComponent;
