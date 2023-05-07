import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userAction";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleShowPassword = () => {
    inputRef.current?.focus();
    toggleShowPassword();
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("avatar", image);

    dispatch(register(myForm));
    navigate("/verify");
  };

  return (
    <div className="w-full text-center bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue rounded-[4px] py-6 px-10 shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue">
      <h2 className="text-2xl text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Gray mb-6">
        Register
      </h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-5 mb-6">
        <div className="w-16 h-16 bg-Light-Grayish-Blue rounded-full">
          <img
            src={imagePrev ? imagePrev : "/user.png"}
            alt=""
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray border-none outline-none text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue"
        />
        <div className="h-[45px] px-4 rounded-[4px] bg-Very-Dark-Grayish-Blue dark:bg-Very-Light-Gray text-Very-Light-Gray dark:text-Very-Dark-Desaturated-Blue flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={inputRef}
            placeholder="Password"
            className="border-none outline-none bg-transparent flex-grow"
          />
          <button onClick={handleToggleShowPassword}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
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
          Sign up
        </button>
      </form>
      <p className="text-Very-Dark-Grayish-Blue dark:text-Very-Light-Gray text-sm">
        Have an account?{" "}
        <Link to={"/login"} className="underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
