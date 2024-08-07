import SearchBar from "./SearchBar";
import { toggleMenu } from "../redux/hamburgerSlice";
import { useDispatch } from "react-redux";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col pt-2 ml-2 ">
      <div className="flex items-center col-span-2 gap-x-4 ml-2 ">
        <CiMenuBurger
          onClick={() => toggleMenuHandler()}
          className="w-6 h-6 rounded-full cursor-pointer "
        />
        <a href="/">
          <img
            className="w-20 h-5 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ6Ng9VkCd9fx4Zve31ePZmRDM7eJlNdLLFf5-J8nEbcftV2gpX-hPO_n3Pwm0aYJEQ&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex items-center  justify-center col-span-9">
        <SearchBar />
      </div>
      <div className="flex items-center col-span-1 gap-x-4">
        <MdVideoCall className="w-6 h-6" />
        <IoIosNotificationsOutline className="w-6 h-6" />
        <FaRegCircleUser className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Head;
