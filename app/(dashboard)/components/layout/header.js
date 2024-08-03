import { Dropdown, Space, message } from "antd";
import { FaBars } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FiLock, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { BiMoon, BiSun, BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useUser, useUserContext } from "../../../contexts/user";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAttachEmail } from "react-icons/md";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Header = ({ title }) => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(dayjs());
  const { user } = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    message.success("Logged out successfully");
    router.push("/login");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const handleProfile = () => {
  //     if(user?.role === 'owner') {
  //     router.push('/owner/profile')
  //     }
  //     if(user?.role === 'driver') {
  //         router.push('/driver/profile')
  //     }
  // }

  const items = [
    {
      label: <Link href={"/admin/profile"}>Profile</Link>,
      icon: <FiUser />,
      key: "1",
      // onClick: handleProfile,
    },
    {
      label: <Link href={"/admin/change-password"}>Change Password</Link>,
      icon: <FiLock />,
      key: "2",
    },
    {
      label: <Link href={"/admin/change-email"}>Change Email</Link>,
      icon: <MdOutlineAttachEmail />,
      key: "22",
    },
    {
      label: <Link href={"/admin/settings"}>Settings</Link>,
      icon: <FiSettings />,
      key: "3",
    },
    {
      label: "Logout",
      icon: <FiLogOut />,
      key: "4",
      onClick: handleLogout,
    },
  ];
  return (
    <header className="header z-10">
      <div className="flex justify-between items-center h-full p-4 dark:text-white dark:bg-dark_color">
        <div className="">
          <FaBars
            className="md:hidden"
            role="button"
            onClick={() => {
              window.document
                .querySelector(".sidebar")
                .classList.toggle("open");
              window.document
                .querySelector(".sidebar-overlay")
                .classList.toggle("open");
            }}
          />
        </div>
        <div className="">
          <h2 className="md:text-lg text-xs font-medium text-dark dark:text-white dark:bg-dark_color">
            {currentTime.format("dddd, MMMM D, YYYY h:mm:ss A")}
          </h2>
        </div>


        <div className="flex items-center gap-x-5">
          <button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            type='button'
            className='rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700'>
            {theme === "light" ? <BiMoon size={20} /> : <BiSun size={20} />}
          </button>

          <Dropdown
            menu={{
              items,
            }}
          >
            {user?.profileImage ? (
              <Image
                className="cursor-pointer rounded-full"
                src={user?.profileImage}
                width={40}
                height={40}
                alt="profile"
              ></Image>
            ) : (
              <Space>
                {user && <span className="cursor-pointer">{user?.name}</span>}
                <BiUser className="cursor-pointer" size={18} />
              </Space>
            )}
          </Dropdown>

        </div>
      </div>
    </header>
  );
};

export default Header;
