import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="mt-2 md:mt-[25.4px]  grid-flow-col grid-cols-12 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
