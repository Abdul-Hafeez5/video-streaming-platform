import { IoMdHome } from "react-icons/io";
import { SiShortcut } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);

  if (!isMenuOpen) return null; // this paterns knows as early returns
  return (
    <div className="col-span-2 ml-2 mr-16">
      <ul className="space-y-4 mb-3">
        <Link to="/">
          <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">
            <IoMdHome className="w-6 h-6" />
            <span className=" text-sm font-medium">Home</span>
          </li>
        </Link>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">
          <SiShortcut className="w-5 h-5" />
          <span className=" text-sm font-medium">Shorts</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <MdSubscriptions className="w-5 h-5" />
          <span className=" text-sm font-medium">Subscritions</span>
        </li>
      </ul>
      <hr />
      <h1 className="my-3 text-base font-medium">You</h1>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <LuUserSquare2 className="w-5 h-5" />
          <span className=" text-sm font-medium">Your Channel</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <FaHistory className="w-5 h-5" />
          <span className=" text-sm font-medium">History</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <MdOutlinePlaylistPlay className="w-5 h-5" />
          <span className=" text-sm font-medium">Playlist</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <BiSolidVideos className="w-5 h-5" />
          <span className=" text-sm font-medium">Your videos</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <MdOutlineWatchLater className="w-5 h-5" />
          <span className=" text-sm font-medium">Watch later</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <SlLike className="w-5 h-5" />
          <span className=" text-sm font-medium">Liked video</span>
        </li>
      </ul>
      <hr />
      <h1 className="my-3 text-base font-medium">You</h1>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <LuUserSquare2 className="w-5 h-5" />
          <span className=" text-sm font-medium">Your Channel</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <FaHistory className="w-5 h-5" />
          <span className=" text-sm font-medium">History</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <MdOutlinePlaylistPlay className="w-5 h-5" />
          <span className=" text-sm font-medium">Playlist</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <BiSolidVideos className="w-5 h-5" />
          <span className=" text-sm font-medium">Your videos</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <MdOutlineWatchLater className="w-5 h-5" />
          <span className=" text-sm font-medium">Watch later</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1  rounded cursor-pointer">
          <SlLike className="w-5 h-5" />
          <span className=" text-sm font-medium">Liked video</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
