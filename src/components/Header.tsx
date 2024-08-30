import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch } from "../Redux/store";
import Dialog from "./Dialog";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="sticky z-[999] top-0 ">
      {/* Modal / Dialog */}
      <Dialog />
      <div className="navbar bg-base-300 gap-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Sky-Shop</a>
        </div>

        {/* Search Bar */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Products"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none flex gap-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body bg-base-300 rounded-box">
                <span className="text-lg font-bold text-white">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary text-white btn-block">
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300  rounded-box z-[1] mt-3 mr-1 w-52 p-2 shadow-[0_10px_20px_rgba(0,_0,_0,_0.7)]"
            >
              <li className="hover:text-emerald-400">
                <a
                  className="justify-between"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Profile
                  <span className="badge text-emerald-400 bg-slate-700">
                    New
                  </span>
                </a>
              </li>
              <li className="hover:text-emerald-400">
                <a>Settings</a>
              </li>
              <li className="hover:text-emerald-400">
                <a onClick={() => dispatch(authActions.setLogout())}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
