import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logof.png";
import "../../index.css";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.svg";

function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [changeBg, setChangeBg] = useState(false);
  const [menu, setMenu] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset >= 200) {
      setChangeBg(true);
    } else if (window.pageYOffset <= 200) {
      setChangeBg(false);
    } else {
      setChangeBg(false);
    }
  };

  function changeMenu() {
    setMenu(!menu)
  }

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    
      <div
        className={`flex fixed z-999 top-0 left-0 w-screen xl:w-full items-center justify-between duration-400 ${
          changeBg === true ? "bg-black" : "bg-transparent"
        }`}
      >
        <div>
          <img className="w-25 xl:w-40 mt-3 ml-10" src={logo} alt="Logo" />
        </div>
        <div className="ml-35 mt-4">
          <div onClick={changeMenu} className={`${menu ? "hidden" : "flex"} flex lg:hidden items-center mb-2 xl:mb-0 rounded-3xl py-2 px-3 justify-center bg-red-800`}
          >
                    <img className="w-10"  src={Menu} alt="" />
                  </div>
        </div>
        <div className="">
          <ul className={`${menu ? "flex flex-col" : "hidden"} top-0 left-0 fixed w-full h-full items-center justify-center gap-5 z-1000 backk`}>
          <div onClick={changeMenu} className="mb-20">
                  <img src={Close} alt="" />
                </div>
          {[
              { path: "/", label: "Home" },
              { path: "/filmes", label: "Filmes" },
              { path: "/series", label: "Séries" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActiveTab(item.path)}
              >
      
                <div className=""
                >
                  <li
                    className={`relative text-4xl text-white font-medium cursor-pointer duration-700 hover:scale-110 mb-10`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500 transition-transform duration-500 ${
                        activeTab === item.path
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      } hover:opacity-100 hover:scale-x-100`}
                    />
                  </li>
                </div>
              </Link>
            ))}
          </ul>
          <ul className="hidden xl:flex px-12 items-center gap-15">
            {[
              { path: "/", label: "Home" },
              { path: "/filmes", label: "Filmes" },
              { path: "/series", label: "Séries" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActiveTab(item.path)}
              >
                <li
                  className={`relative text-2xl text-white font-medium opacity-70 cursor-pointer duration-700 hover:opacity-100 hover:scale-110`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500 transition-transform duration-500 ${
                      activeTab === item.path
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    } hover:opacity-100 hover:scale-x-100`}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      
      
      </div>
    
  );
}

export default Header;
