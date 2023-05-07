import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue flex items-center flex-col md:flex-row gap-4 md:gap-10 text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray">
      <div>
        <div className="w-28 h-28 rounded-full">
          <img
            src={user ? user.avatar.url : "/user.png"}
            alt="Your Photo"
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
        <button className="text-sm mt-2 text-Bright-Blue">Change Photo</button>
      </div>
      <div className="flex flex-col items-center md:items-start gap-2">
        <h3>Name: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p className="flex items-center gap-2">
          Verified:{" "}
          <span>
            <img
              src={user.verified ? "/verified.png" : ""}
              alt=""
              className="w-4 h-4"
            />
          </span>
        </p>
        <div className="flex gap-3 flex-col md:flex-row">
          <button className="bg-Bright-Blue py-2 px-4 rounded-sm">
            Update Profile
          </button>
          <button className="bg-Bright-Blue py-2 px-4 rounded-sm">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
