import SearchBar from "./SearchBar";
import { toggleMenu } from "../redux/hamburgerSlice";
import { useDispatch } from "react-redux";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" fixed top-0 z-30  bg-white w-full  grid grid-flow-col pt-2 mx-2">
      <div className="flex items-center col-span-2 gap-x-4 lg:gap-x-8  ">
        <RxHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="hidden sm:block w-6 h-6 rounded-full cursor-pointer "
        />
        <Link to="/">
          <img
            className="w-24 h-5 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ6Ng9VkCd9fx4Zve31ePZmRDM7eJlNdLLFf5-J8nEbcftV2gpX-hPO_n3Pwm0aYJEQ&usqp=CAU"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center  justify-center col-span-9">
        <SearchBar />
      </div>
      <div className="flex items-center col-span-1 gap-x-4">
        <MdVideoCall className="w-6 h-6 cursor-pointer" />
        <IoIosNotificationsOutline className="w-6 h-6 cursor-pointer" />
        <img
          src="https://yt3.ggpht.com/yti/ANjgQV9nkQTLQOGIp6dTWIoiHGZ-2QGTgiKd4FD2iE7Ji4vBleTr=s88-c-k-c0x00ffffff-no-rj"
          alt="user"
          className=" hidden md:block w-7 h-7 rounded-full cursor-pointer"
        />

        <CiSearch className="w-6 h-6 md:hidden cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
