import Container from "../components/Container.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import fetcher from "../utils/fetcher.js";
import useSWR from "swr";
import {
  UserRoundPen,
  Mail,
  MapPin,
  Link as LinkIcon,
  Edit,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useTokenStore from "../stores/useTokenStore.js";

const UserProfilePage = () => {
  const { logout } = useTokenStore();
  const navigate = useNavigate();
  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/user-profile/profile`,
    fetcher
  );

  const handleLogout = () => {
    alert("Are you sure you want to logout?");
    logout();
    navigate("/");
  };
  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb currentPageTitle="User Profile" />
        <div className="max-w-xl mx-auto md:my-8 my-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className=" bg-purple-500 md:h-32 h-20"></div>
          <div className="px-6 md:py-4 py-2">
            <div className="relative">
              {data?.data.profile_image ? (
                <img
                  className="md:size-32 size-20 rounded-full object-cover shadow-md absolute md:-top-20 -top-14 left-1/2 transform -translate-x-1/2"
                  src={data?.data.profile_image}
                  alt="profile"
                />
              ) : (
                <div className="md:size-32 size-20 rounded-full text-white bg-gray-300 flex justify-center items-center shadow-md absolute md:-top-20 -top-14 transform ">
                  <UserRoundPen size={32} />
                </div>
              )}
            </div>
            <div className="mt-16">
              <h1 className="md:text-2xl text-xl font-bold text-gray-900 capitalize">
                {data?.data.name}
              </h1>
              <p className="text-gray-600 md:text-base text-sm">UX Designer & Frontend Developer</p>
            </div>
            <p className="mt-2 text-gray-600 md:text-base text-sm">
              Passionate about creating beautiful and functional user
              experiences. Always learning and exploring new technologies.
            </p>
            <div className="mt-4 flex items-center text-gray-600">
              <MapPin size={18} className="mr-2" />
              <span>San Francisco, CA</span>
            </div>
            <div className="mt-2 flex items-center text-gray-600">
              <LinkIcon size={18} className="mr-2" />
              <a
                href="https://janedoe.com"
                className="text-blue-500 hover:underline"
              >
                janedoe.com
              </a>
            </div>
            <div className="mt-2 flex items-center text-gray-600">
              <Mail size={18} className="mr-2" />
              <a
                href="mailto:jane@example.com"
                className="text-blue-500 hover:underline"
              >
                {data?.data.email}
              </a>
            </div>
          </div>

          <div className="px-6 md:py-4 py-2 flex gap-4 md:flex-row flex-col">
            <Link
              to="/dashboard/profile/edit"
              className="flex-1 border border-gray-300 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
            >
              <Edit size={18} className="mr-2" />
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 border border-gray-300 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 flex items-center justify-center"
            >
              Logout
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfilePage;
