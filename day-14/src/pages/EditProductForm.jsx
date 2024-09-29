import React, { useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Breadcrumb from "../components/Breadcrumb";
import useSWR from "swr";
import EditFormSkeletonLoader from "../components/EditFormSkeletonLoader";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const EditProductForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/products/${id}`,
    fetcher
  );
  const onSubmit = async (data) => {
    const submitData = {
      name: data.name,
      price: data.price,
      created_at: new Date().toISOString(),
    };
    setLoading(true);
    await fetch(
      `${import.meta.env.VITE_BASE_URL}/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      }
    );
    if (data.redirect) {
      navigate("/product");
    }
    reset();
    setLoading(false);
    toast.success("Product created successfully");
  };
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"EditProductForm"}
          link={[{ title: "Module Product List", path: "/product" }]}
        />

        {isLoading ? (
          <EditFormSkeletonLoader />
        ) : (
          <form className="w-full md:w-1/3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold mt-3">Edit ProductForm</h1>
            <p className=" text-sm text-gray-400 mb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              quidem.
            </p>
            <div className="mb-6">
              <label
                htmlFor="product-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                id="product-input"
                placeholder="e.g. Apple"
                defaultValue={data.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="price-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Product Price
              </label>
              <input
                type="number"
                id="price-input"
                {...register("price", { required: true })}
                placeholder="e.g. 100"
                defaultValue={data.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-5">
              <div className="flex items-center mb-4">
                <input
                  id="disabled-checkbox"
                  type="checkbox"
                  {...register("check_input", { required: true })}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-checkbox"
                  className={`ms-2 text-sm font-semibold ${
                    errors.check_input ? "text-red-500" : "text-gray-400"
                  } dark:text-gray-500`}
                >
                  {errors.check_input
                    ? "This field is required"
                    : "  Check your information."}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="redirect"
                  type="checkbox"
                  {...register("redirect", { required: true })}
                  defaultChecked
                  defaultValue={true}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="redirect"
                  className={`ms-2 text-sm font-semibold text-gray-400 dark:text-gray-500`}
                >
                  Back to Product List after saving.
                </label>
              </div>
            </div>
            <div>
              <Link
                to={"/product"}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cancle
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {loading ? "Loading..." : "Update Product"}
              </button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

export default EditProductForm;
