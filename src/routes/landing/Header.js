import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logoMC-w.png";
import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import SuccessMsg from "../../components/SuccessMsg";
import ResetLocation from "../../helpers/ResetLocation";

const Header = ({
  loginModal,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin,
  isAdmin,
  activateLoginModal,
}) => {
  return (
    <header className="absolute z-10">
      {loginModal}
      <nav className="flex items-center justify-between h-[90px] px-6 md:px-10 w-full">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className=" w-1/3 max-w-[220px]"
        >
          <img
            className="w-[350px] h-auto"
            src={logo}
            alt="MarketConnect Logo"
          />
        </NavLink>

        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="w-6 h-6 bg-cover cursor-pointer md:hidden z-50 transition-all"
          style={{
            backgroundImage: `url(${isModalActive ? closeMenu : openMenu})`,
          }}
          onClick={showModal}
        ></label>

        <div
          className="fixed inset-0 bg-black/60  transform transition-transform translate-x-full peer-checked:translate-x-0 md:relative md:bg-transparent md:translate-x-0"
        >
          <ul className="flex flex-col gap-6 items-center justify-center h-screen md:h-auto md:flex-row md:gap-8 bg-dark-charcoal md:bg-transparent text-white font-bold text-lg p-8 md:p-0">
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                to="/"
                className="text-white text-sm"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                to="/servicios"
                className="text-white text-sm"
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                to="/marketplace"
                className="text-white text-sm"
              >
                MarketPlace
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                to="/acercade"
                className="text-white text-sm"
              >
                Acerca de
              </NavLink>
            </li>
            {validLogin && (
              <li>
                <NavLink
                  onClick={() => {
                    ResetLocation();
                    hideMenu();
                  }}
                  to="/usuarios-menu-admin"
                  className="text-white text-sm"
                >
                  Usuarios
                </NavLink>
              </li>
            )}

            
            <li>
              {validLogin ? (
                <Link
                  to="/"
                  className="buttonB w-auto rounded-md"
                  onClick={() => {
                    ResetLocation();
                    handleLogout();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <button
                  className="buttonB w-auto rounded-md"
                  onClick={() => {
                    ResetLocation();
                    activateLoginModal();
                  }}
                >
                  Inicio de sesión
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <SuccessMsg />
    </header>
  );
};

export default Header;
