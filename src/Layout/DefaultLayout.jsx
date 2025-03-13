import { Outlet } from "react-router";
import Header from "../components/Header";

function LayoutHeader() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default LayoutHeader;
