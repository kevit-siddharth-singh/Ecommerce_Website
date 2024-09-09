import { useState } from "react";
import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import UserImage from "./UserImage";
import { SuccessFullNotify } from "../utils/ToastNotify";

const ProfileForm = () => {
  const dispatch = useAppDispatch();

  const { name: username } = useAppSelector((state) => state.authentication);

  const [localUsername, setLocalUsername] = useState("");

  const [isError, setIsError] = useState(false);

  // Name Validation
  function usernameValidation() {
    if (localUsername.length >= 6) {
      dispatch(authActions.setName(localUsername));
      SuccessFullNotify("username changed");
    } else {
      console.log("Error");
      setIsError(true);
    }
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-4xl font-bold text-green-600 sm:text-4xl">
            Profile
          </h1>
          <UserImage />
          <form action="#" className=" space-y-4 rounded-lg p-4  sm:p-6 lg:p-1">
            <p className="text-center text-lg font-medium">
              Enter below to edit your name
            </p>

            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  onChange={(e) => {
                    setIsError(false);
                    setLocalUsername(e.target.value);
                  }}
                  id="name"
                  type="text"
                  className={`w-full rounded-lg border ${
                    isError ? "border-red-500" : "border-transparent "
                  } p-4 pe-12 text-md shadow-sm`}
                  placeholder={username}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {isError && (
              <span className="error-area p-1 text-red-500 text-md">
                Invalid username
              </span>
            )}
            <button
              onClick={usernameValidation}
              type="button"
              className={`block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white select-none  ${
                localUsername.length === 0 ? "cursor-not-allowed " : "undefined"
              }`}
              disabled={localUsername.length === 0}
            >
              Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
