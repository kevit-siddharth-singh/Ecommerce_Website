import React, { useState, ChangeEvent, FormEvent } from "react";
import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {
  // State to store form values
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  // State to store form errors
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  // Access Redux state and dispatch function
  const data = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {
      firstName: "",
      email: "",
      password: "",
    };
    if (!formValues.firstName) newErrors.firstName = "First Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Email is invalid";
    if (!formValues.password) newErrors.password = "Password is required";
    else if (formValues.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.values(validationErrors).every((error) => error === "")) {
      // No validation errors
      console.log("Form submitted:", formValues);
      dispatch(
        authActions.setAuthentication({
          email: formValues.email,
          isAuthenticate: true,
          name: formValues.firstName,
        })
      );

      // Optionally resetting the Error after Submission
      setErrors({
        firstName: "",
        email: "",
        password: "",
      });
      // Optionally reset form values after submission
      setFormValues({
        firstName: "",
        email: "",
        password: "",
      });
    } else {
      setErrors(validationErrors);
    }
    navigate('/product');
  };
  console.log({ data });
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
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
            value={formValues.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="col-span-6">
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
            value={formValues.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit"
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
          >
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
