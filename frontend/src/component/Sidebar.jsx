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
    <div className="fixed top-0 left-0 h-screen w-64 bg-green-200 text-black shadow-lg">
      <div className="p-6 border-b border-green-300">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h2>
      </div>
      <ul className="p-4 space-y-4">
        {[
          { path: "/articleadmin", label: "Articles" },
          { path: "/contactadmin", label: "Contact" },
          { path: "/sampahadmin", label: "Sampah" },
          { path: "/useradmin", label: "Users" },
        ].map((item, index) => (
          <li key={index} className="rounded-lg hover:bg-green-300 transition">
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
  );
};

export default Sidebar;
