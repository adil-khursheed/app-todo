import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, login } from "../redux/actions/userAction";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error]);

  return (
    <>
      <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue">
        <h2 className="text-2xl text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray mb-6">
          Login
        </h2>
        <form
          onSubmit={loginHandler}
          className="flex flex-col w-full gap-5 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
          />
          <button
            type="submit"
            className="w-full bg-Bright-Blue h-[45px] rounded-[4px] text-Very-Light-Gray text-base">
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center text-sm">
          <p className="text-Very-Dark-Grayish-Blue dark:text-Very-Light-Gray">
            Not registered?{" "}
            <Link to={"/register"} className="underline">
              Sign up
            </Link>
          </p>
          <p className="text-Very-Dark-Grayish-Blue dark:text-Very-Light-Gray">
            <Link to={"/forgotpassword"} className="underline">
              Forgot Password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
