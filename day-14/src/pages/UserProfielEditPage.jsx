import React, { useRef, useState, useEffect } from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import {
  UserRoundPen,
  Camera,
  ChevronRight,
  Info,
  Key,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import useTokenStore from "../stores/useTokenStore";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const UserProfileEditPage = () => {
  const [preImage, setPreImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { setUser } = useUserStore();
  const [userCookie, setUserCookie] = useCookie("user");
  const { token } = useTokenStore();
  const fileRef = useRef(null);
  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/user-profile/profile`,
    fetcher
  );

  useEffect(() => {
    if (preImage) {
      const previewUrl = URL.createObjectURL(preImage);
      setImagePreview(previewUrl);
      return () => URL.revokeObjectURL(previewUrl);
    }
  }, [preImage]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setPreImage(file);
    const formData = new FormData();
    formData.append("profile_image", file);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/user-profile/change-profile-image`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (res.ok) {
        const data = await res.json();
        setUserCookie(JSON.stringify(data?.user));
        console.log(data, "change image");
        setUser(data.user);
        toast.success(data.message);
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to upload image");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("An error occurred while uploading the image.");
    }
  };

  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb
          currentPageTitle="User Profile Edit"
          link={[{ title: "User Profile", path: "/dashboard/profile" }]}
        />
        <div className="max-w-md my-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="size-28 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  {imagePreview || data?.data?.profile_image ? (
                    <img
                      className="size-28 rounded-full object-cover shadow-md"
                      src={imagePreview || data?.data?.profile_image}
                      alt="profile"
                    />
                  ) : (
                    <div className="size-28 rounded-full bg-gray-300 flex justify-center items-center shadow-md">
                      <UserRoundPen size={32} />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => fileRef.current.click()}
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <Camera className="w-4 h-4" />
                </button>
                <input
                  type="file"
                  ref={fileRef}
                  hidden
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
              </div>
            </div>
            <div className="space-y-4">
              <Link
                to={"/dashboard/profile/change-name"}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Change Name
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to={"/dashboard/profile/change-password"}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                <div className="flex items-center">
                  <Key className="w-5 h-5 mr-2" />
                  Change Password
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to={"/dashboard/profile/app-detail"}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                <div className="flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  App Information
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileEditPage;
