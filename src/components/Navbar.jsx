import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const app_name = import.meta.env.VITE_APP_NAME;
  const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/cars"}>Cars</NavLink>
              </li>
              <li>
                <NavLink to={"/rents"}>Rent</NavLink>
              </li>
              <li>
                <NavLink to={"/returns"}>Return</NavLink>
              </li>
              <li>
                <NavLink to={"/pinalties"}>Pinalties</NavLink>
              </li>
              <li>
                <NavLink to={"/users"}>Users</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{app_name}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/cars"}>Cars</NavLink>
            </li>
            <li>
              <NavLink to={"/rents"}>Rent</NavLink>
            </li>
            <li>
              <NavLink to={"/returns"}>Return</NavLink>
            </li>
            <li>
              <NavLink to={"/pinalties"}>Pinalties</NavLink>
            </li>
            <li>
              <NavLink to={"/users"}>Users</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isAuthenticated ? <button onClick={logout} className="btn">Logout</button> : <NavLink to={"/login"} className="btn">Login</NavLink>}
        </div>
      </div>
      <div className="mx-10 my-5">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
