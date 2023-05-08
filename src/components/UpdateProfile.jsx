import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [imagePrev, setImagePrev] = useState(user.avatar.url);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("avatar", image);
    await dispatch(updateProfile(myForm));
    dispatch(loadUser());
    navigate("/profile");
  };

  const { error, message } = useSelector((state) => state.message);

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
          Update Profile
        </h2>
        <form
          onSubmit={updateProfileHandler}
          className="flex flex-col items-center justify-center w-full gap-5 mb-6">
          <div className="w-28 h-28 rounded-full">
            <img
              src={imagePrev ? imagePrev : "/user.png"}
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
