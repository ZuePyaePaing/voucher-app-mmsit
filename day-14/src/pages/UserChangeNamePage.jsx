import React from "react";
import Container from "../components/Container";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Breadcrumb from "../components/Breadcrumb";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useTokenStore from "../stores/useTokenStore";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";

const UserChangeNamePage = () => {
  const [userCookie,setUserCookie] = useCookie("user");
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { data } = useSWR(
    import.meta.env.VITE_BASE_URL + "/user-profile/profile",
    fetcher
  );
  const { token } = useTokenStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onsubmit = async (data) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_BASE_URL + "/user-profile/change-name",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const resData = await res.json();
      console.log(resData)
      if (res.ok) {
        setUserCookie(JSON.stringify(resData.user));
        setUser(resData.user);
        navigate("/dashboard/profile");
        toast.success(resData.message);
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb
          currentPageTitle="User Profile Change Name"
          link={[{ title: "User Profile", path: "/dashboard/profile" }]}
        />
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-[500px] p-6 bg-white shadow-lg rounded-lg"
        >
          <div className="w-full flex items-center justify-between gap-4">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter name"
              className="w-3/4 py-2 px-3 text-lg capitalize bg-gray-100 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:bg-white transition-all"
              defaultValue={data?.data.name}
            />
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-1/4 bg-blue-700 px-4 py-2 text-white rounded-md hover:bg-blue-600/50 transition-all"
            >
              {isSubmitting ? "Loading..." : "Change"}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default UserChangeNamePage;
