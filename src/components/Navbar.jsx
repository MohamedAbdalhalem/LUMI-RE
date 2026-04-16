import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCircleUser,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";
import { Link, NavLink, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../store/AuthContext";
import { CartContext } from "../store/CartContext";

export default function Navbar() {
  const { setToken, token } = use(AuthContext);
  const { productsNumber } = use(CartContext);
  const navigate = useNavigate();
  const tkn = localStorage.getItem("tkn");
  function handleDarkMode() {
    if (localStorage.getItem("data-theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("data-theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("data-theme", "dark");
    }
  }

  (function setDarkMode() {
    if (localStorage.getItem("data-theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  })();

  function handleSignOut() {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/sign-in");
  }
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="ps-0 pe-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className=" dropdown-content bg-base-100  rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            {token ? (
              <>
                <NavItems />
                <li className="cursor-pointer">
                  <p onClick={handleSignOut} className="pb-1">
                    Sign-out
                  </p>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/sign-in" className="pb-1">
                    Sign-in
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-xl no-underline">
          LUMIÈRE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal gap-8 px-1">
          {token ? (
            <>
              <NavItems />
              <li>
                <p onClick={handleSignOut} className="pb-1">
                  Sign-out
                </p>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/sign-in" className="pb-1">
                  Sign-in
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-3 ">
        <FontAwesomeIcon
          onClick={handleDarkMode}
          className="cursor-pointer"
          icon={faMoon}
        />
        {tkn && (
          <NavLink to="/profile">
            <FontAwesomeIcon className="cursor-pointer" icon={faCircleUser} />
          </NavLink>
        )}
        {tkn && (
          <NavLink to="/cart" className="relative inline-block">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCartArrowDown}
            />

            {/* Badge */}
            <span className="absolute -top-3 bg-white -right-1.5  text-[12px] px-0.5 py-0.5 rounded-full font-bold">
              {productsNumber}
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
}
