import LoginForm from "../components/LoginForm";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";

const Login = () => {
  // Custom Hook For Changing Title
  useTitleChangeHook({ title: "Login" });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen  flex items-center">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome Back !
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Welcome to Shop-Sky, please login to add items to your life .
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
