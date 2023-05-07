import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userAction";

const Header = ({ handleThemeSwitch, theme }) => {
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleModal = () => setToggle(!toggle);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    setToggle(false);
  };
  return (
    <nav className="flex justify-between items-center mb-8">
      <Link to={"/"}>
        <h1 className="font-bold text-4xl tracking-[15px] text-Very-Light-Gray">
          TODO
        </h1>
      </Link>
      <div className="flex items-center gap-5">
        <button onClick={handleThemeSwitch}>
          <img
            src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt=""
            className="w-6"
          />
        </button>
        <div className="relative cursor-pointer" onClick={handleModal}>
          {user && (
            <div className="w-10 h-10 rounded-full">
              <img
                src={user?.avatar.url}
                alt=""
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          )}
          {toggle && (
            <div className="absolute w-32 flex flex-col items-center justify-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue top-12 -left-[90px] rounded-sm py-3 gap-4 shadow-md shadow-Dark-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Grayish-Blue">
              <Link to={"/profile"} className="hover:text-Bright-Blue">
                Profile
              </Link>
              <button
                className="hover:text-Bright-Blue"
                onClick={logoutHandler}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
