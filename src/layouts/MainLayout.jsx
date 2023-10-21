import { Outlet } from "react-router-dom";
import Navbar from "../components/Header.jsx/Navbar";

const MainLayout = () => {
  return (
    <div className="container  m-auto px-2 md:px-10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
