import React from "react";
import Container from "../components/Container";
import { useForm } from "react-hook-form";
import Breadcrumb from "../components/Breadcrumb.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTokenStore from "../stores/useTokenStore";
const UserPasswordChangePage = () => {
  const { token } = useTokenStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/user-profile/change-password`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        navigate("/");
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {}
    console.log(data);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Container>
        <Breadcrumb
          currentPageTitle="Change Password"
          link={[{ title: "User Profile", path: "/dashboard/profile" }]}
        />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            MMSIT Software
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="old_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    {...register("old_password", {
                      required: "This field is required",
                      minLength: { value: 8, message: "Minimum 8 characters" },
                    })}
                    id="old_password"
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="••••••••"
                  />
                  {errors.old_password && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="new_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    {...register("new_password", {
                      required: "This field is required",
                      minLength: { value: 8, message: "Minimum 8 characters" },
                    })}
                    id="password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  />
                  {errors.new_password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="new_password_confirmation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    {...register("new_password_confirmation", {
                      required: "This field is required",
                      validate: (value) =>
                        value === watch("new_password") ||
                        "Passwords do not match",
                    })}
                    id="confirm-password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${
                      errors.new_password_confirmation
                        ? "border-red-500"
                        : "border-gray-300"
                    } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  />
                  {errors.new_password_confirmation && (
                    <p className="text-red-500">
                      {errors.new_password_confirmation.message}
                    </p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      {...register("terms", { required: true })}
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isSubmitting ? "Submitting..." : "Change Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserPasswordChangePage;
