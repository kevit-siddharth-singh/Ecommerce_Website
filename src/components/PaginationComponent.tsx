import { paginationActions } from "../Redux/Slices/PaginationSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const PaginationComponent = () => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.pagination.currentPage);

  function handleNext() {
    if (currPage < 10) {
      dispatch(paginationActions.nextPage());
    }
  }
  function handlePrev() {
    if (currPage > 1) {
      dispatch(paginationActions.prevPage());
    }
  }

  return (
    <div className="join mb-3 flex justify-center w-[20%]  ">
      <button onClick={handlePrev} className="join-item btn w-1/3">
        «
      </button>
      <div className="join-item btn w-2/3">Page {currPage}</div>
      <button onClick={handleNext} className="join-item btn w-1/3">
        »
      </button>
    </div>
  );
};

export default PaginationComponent;
