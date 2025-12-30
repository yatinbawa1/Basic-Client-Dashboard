import logo from "../../assets/Logo.svg";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { SearchOutlined } from "@mui/icons-material";
import PrimaryButton from "../Button/PrimaryButton";
import { useLocation, Link, useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

function Navbar({ searchState }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname === "/";
  const isUser = location.pathname.startsWith("/user/");
  const isAddUser = location.pathname == "/add-user";
  console.log(isAddUser);
  const userPreview = location.state;

  return (
    <div className="flex w-full items-center gap-4 bg-white p-4 text-2xl shadow-md transition-all">
      <div className={`logo ${isDashboard ? "hidden" : "block"} md:block`}>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
      </div>

      {isDashboard && (
        <div className="flex flex-1 gap-4">
          <div className="text-secondary flex flex-1 items-center gap-2 rounded-md border-gray-300 px-4 py-2 text-3xl shadow-sm transition-all focus-within:shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
            <SearchOutlined />
            <input
              type="text"
              value={searchState[0]}
              onChange={(e) => searchState[1](e.target.value)}
              placeholder="Search..."
              className="placeholder:text-secondary w-full bg-transparent text-xl focus:outline-none sm:text-xl lg:text-2xl"
            />
          </div>
          <PrimaryButton
            Icon={PersonAddOutlinedIcon}
            text="Add User"
            onClick={() => {
              navigate("/add-user");
            }}
          />
        </div>
      )}

      {isUser && userPreview && (
        <div className="ml-auto flex items-center gap-3 rounded-md px-4 py-2 shadow-sm">
          <img
            src={userPreview.image}
            alt={userPreview.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="text-base font-medium">{userPreview.name}</span>
        </div>
      )}
      {isAddUser && (
        <div className="ml-auto">
          <PrimaryButton
            color="#132440"
            Icon={DashboardOutlinedIcon}
            text="Dashboard"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
