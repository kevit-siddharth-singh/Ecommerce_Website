import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 ">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="col-span-6  ">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
            Create an account
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            Already have an account?
            <a href="#" className="text-gray-700 underline dark:text-gray-200">
              Log in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
