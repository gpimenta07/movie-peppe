import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logof.png";
import "../../index.css";
import { ChartNoAxesColumn } from "lucide-react";

function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [changeBg, setChangeBg] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset >= 200) {
      setChangeBg(true);
    } else if (window.pageYOffset <= 200) {
      setChangeBg(false);
    } else {
      setChangeBg(false);
    }
  };

  

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div
      className={`fixed z-999 top-0 left-0 w-full flex items-center justify-between duration-400 ${
        changeBg === true ? "bg-black" : "bg-transparent"
      }`}
    >
      <div>
        <img className="w-40 mt-3 ml-10" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex px-12 items-center gap-15">
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
