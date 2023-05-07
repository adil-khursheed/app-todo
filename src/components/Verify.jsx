import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verification } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

function Verify() {
  const [otp, setOTP] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(verification(otp));
    navigate("/");
  };

  return (
    <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue">
      <h2 className="text-2xl text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray mb-6">
        Verify Your Account
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 mb-6">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="OTP"
          className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
        />
        <button
          type="submit"
          className="w-full bg-Bright-Blue h-[45px] rounded-[4px] text-Very-Light-Gray text-base">
          Verify
        </button>
      </form>
    </div>
  );
}

export default Verify;
