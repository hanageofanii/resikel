// src/components/Sidebar.js
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" ||
    location.pathname === "/Reg" ||
    location.pathname === "/About" ||
    location.pathname === "/" ||
    location.pathname === "/Education" ||
    location.pathname === "/ArticlesList" ||
    location.pathname === "/Rewards" ||
    location.pathname === "/claimreward" ||
    location.pathname === "/Tracklocation" ||
    location.pathname === "/Contact" ||
    location.pathname === "/Blog";
  if (isAuthPage) return null;

  return (
    <div>
      <div className="w-screen t-0  h-20 bg-white text-slate-800 flex justify-end">
        <div className="flex items-center">
          <img
            src="./src/assets/images/logo.png"
            alt="Illustration of mission"
            className="mx-auto w-16"
          />
        </div>
        <div className="text-black flex justify-center flex-col mr-10">
          <p className="text-lg font-semibold">Resikel</p>
          <p className="font-medium text-sm">Admin</p>
        </div>
      </div>
      <div className="fixed top-0 left-0 h-screen w-64 bg-white text-slate-800">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Admin Dashboard
          </h2>
        </div>
        <ul className="p-4 space-y-4">
          {[
            { path: "/articleadmin", label: "Articles" },
            { path: "/contactadmin", label: "Contact" },
            { path: "/sampahadmin", label: "Sampah" },
            { path: "/useradmin", label: "Users" },
          ].map((item, index) => (
            <li
              key={index}
              className="rounded-lg hover:bg-slate-200 transition"
            >
              <Link
                to={item.path}
                className="block p-3 text-lg font-semibold rounded-lg text-center hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
