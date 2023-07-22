import logo from "../../assets/images/logo.png.webp";
import './header.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <div className="w-full h-auto bg-white sticky top-0 z-50">
      <nav className="container  py-5 flex justify-between items-center">
        <div className="">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <ul className="flex space-x-9 navlink">
            <li>
              <NavLink
                to={"/"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/page"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                PAGE
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-9">
            <li>
              <NavLink
                to={"/search"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                <SearchOutlinedIcon />
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/cart"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                <ShoppingCartOutlinedIcon />
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/profile"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                <PersonOutlinedIcon />
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/favorite"}
                className="hover:text-color-green transition-colors duration-200 ease-linear"
              >
                <FavoriteBorderOutlinedIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponents;
//
