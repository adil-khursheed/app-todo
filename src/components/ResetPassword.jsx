import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { error, message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    await dispatch(resetPassword(otp, newPassword));
    navigate("/login");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <>
      <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue">
        <h2 className="text-2xl text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray mb-6">
          Reset Password
        </h2>
        <form
          onSubmit={resetPasswordHandler}
          className="flex flex-col w-full gap-5 mb-6">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
            className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
          />
          <button
            type="submit"
            className="w-full bg-Bright-Blue h-[45px] rounded-[4px] text-Very-Light-Gray text-base">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
