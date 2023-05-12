import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, loadUser, updateTask } from "../redux/actions/userAction";

const Task = ({ title, status, taskId }) => {
  const [completed, setCompleted] = useState(status);

  const dispatch = useDispatch();

  const handleCheckbox = async () => {
    setCompleted(!completed);
    await dispatch(updateTask(taskId));
    dispatch(loadUser());
  };

  const deleteTodoHandler = async () => {
    await dispatch(deleteTask(taskId));
    dispatch(loadUser());
  };

  return (
    <div className="cursor-pointer w-full h-[60px] bg-transparent flex items-center justify-between px-4 text-lg text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Grayish-Blue border-b border-b-Very-Light-Grayish-Blue dark:border-b-Dark-Grayish-Blue">
      <div className="flex items-center gap-7">
        <div className="hover:bg-gradient-to-br hover:from-Gradient-Color-1 hover:to-Gradient-Color-2 rounded-full p-[1px]">
          <div
            onClick={handleCheckbox}
            className={`cursor-pointer w-6 h-6 border border-Very-Light-Grayish-Blue rounded-full ${
              completed
                ? "bg-gradient-to-br from-Gradient-Color-1 to-Gradient-Color-2 border-none"
                : "bg-transparent"
            } flex items-center justify-center hover:bg-Very-Light-Gray dark:hover:bg-Very-Dark-Grayish-Blue hover:border-none`}>
            <img src={completed ? "/icon-check.svg" : ""} alt="" />
          </div>
        </div>
        <div
          className={`${
            completed
              ? "line-through text-Light-Grayish-Blue dark:text-Dark-Grayish-Blue"
              : ""
          }`}>
          {title}
        </div>
      </div>
      <button onClick={deleteTodoHandler}>
        <img src="/icon-cross.svg" alt="" />
      </button>
    </div>
  );
};

export default Task;
