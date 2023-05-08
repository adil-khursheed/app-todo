import React, { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("");

  const changeImageHandler = () => {};

  const updateHandler = () => {};

  return (
    <>
      <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue">
        <h2 className="text-2xl text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray mb-6">
          Update Profile
        </h2>
        <form
          onSubmit={updateHandler}
          className="flex flex-col items-center justify-center w-full gap-5 mb-6">
          <div className="w-28 h-28 rounded-full">
            <img
              src="/user.png"
              alt=""
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
          />
          <label
            htmlFor="avatar"
            className="cursor-pointer w-full bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray h-[45px] flex items-center justify-center rounded-[4px] text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue">
            <input
              type="file"
              id="avatar"
              accept="image/png,image/jpg,image/jpeg"
              className="hidden"
              onChange={changeImageHandler}
            />
            Choose image
          </label>
          <button
            type="submit"
            className="w-full bg-Bright-Blue h-[45px] rounded-[4px] text-Very-Light-Gray text-base">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
