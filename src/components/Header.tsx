import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import Dialog from "./Dialog";
import { searchActions } from "../Redux/Slices/SearchSlice";

const Header = () => {
  const { totalQuantity, totalAmount } = useAppSelector((state) => state.cart);
  const profile = useAppSelector((state) => state.authentication.profile);
  const searchTerm = useAppSelector((state) => state.search.search);

  const isAuthenticate = useAppSelector(
    (state) => state.authentication.isAuthenticate
  );

  function GoToCart() {
    if (isAuthenticate) {
      navigate("/product/cart");
    } else {
      navigate("/login");
    }
  }

  function GoToOrder() {
    if (isAuthenticate) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  }
  function LoginHandler() {
    if (isAuthenticate) {
      dispatch(authActions.setLogout());
      navigate("/login");
    } else {
      navigate("/login");
    }
  }
  function HandleProfile() {
    if (isAuthenticate) {
      const dialog: HTMLDialogElement = document.getElementById(
        "my_modal_2"
      ) as HTMLDialogElement;
      dialog.showModal();
    } else {
      navigate("/login");
    }
  }

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(searchActions.setSearchTerm(debouncedSearchTerm));
    }, 300); // Adjust the delay as needed (e.g., 300ms)

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className="sticky z-[999] top-0 w-full  ">
      <Dialog />
      <div className="navbar bg-base-300 max-sm:px-3 gap-0 md:gap-2 w-full">
        {/* Logo */}
        <div
          className="flex max-md:hidden cursor-pointer 
        
          "
        >
          <a
            href="https://github.com/siddhu1919"
            target="_blank"
            className="btn btn-ghost text-2xl text-white "
          >
            S K Y - S H O P
          </a>
        </div>

        {/* Search Bar */}
        <div className="form-control w-full md:m-3 my-3 ">
          <input
            onChange={(e) => setDebouncedSearchTerm(e.target.value)}
            type="text"
            placeholder={
              searchTerm.length !== 0 ? searchTerm : "Search Products"
            }
            value={debouncedSearchTerm}
            className="input input-bordered md:w-1/2 lg:w-[45%] xl:w-1/3 w-full md:ml-auto"
          />
        </div>
        <div className="flex-none flex gap-5 ">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  hover:bg-slate-700"
            >
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:stroke-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-xs indicator-item ">
                  {isAuthenticate ? totalQuantity : 0}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body bg-base-300 rounded-box">
                <span className="text-lg font-bold text-white">
                  {isAuthenticate ? totalQuantity : 0} Items
                </span>
                <span className="text-info">
                  Subtotal : ₹{isAuthenticate ? totalAmount.toFixed(2) : 0}{" "}
                </span>
                <div className="card-actions">
                  <button
                    onClick={GoToCart}
                    className="btn btn-primary text-white btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    profile
                      ? profile
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300  rounded-box z-[1] mt-3 mr-1 w-52 p-2 shadow-[0_10px_20px_rgba(0,_0,_0,_0.7)]"
            >
              <li className="hover:text-emerald-400">
                <a className="justify-between" onClick={HandleProfile}>
                  Profile
                  <span className="badge text-emerald-400 bg-slate-700">
                    New
                  </span>
                </a>
              </li>
              <li className="hover:text-emerald-400">
                <a onClick={GoToOrder}>Orders</a>
              </li>
              <li className="hover:text-emerald-400">
                <a onClick={LoginHandler}>
                  {isAuthenticate ? "Logout" : "Login"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
