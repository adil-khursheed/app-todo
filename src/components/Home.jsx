import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../redux/actions/userAction";
import { toast } from "react-hot-toast";

const Home = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [title, setTitle] = useState("");

  const { error, message } = useSelector((state) => state.message);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const addTaskHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTask(title));
    dispatch(loadUser());
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
      <TodoInput
        addTaskHandler={addTaskHandler}
        title={title}
        setTitle={setTitle}
      />

      <div className="bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue shadow-md shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue rounded-[4px]">
        {user &&
          user.tasks.map((task) => (
            <Task
              key={task._id}
              title={task.title}
              status={task.completed}
              taskId={task._id}
            />
          ))}
        <div className="flex justify-between items-center px-4 h-[45px]">
          <p className="text-sm text-Dark-Grayish-Blue">
            {user.tasks.length} items left
          </p>
          <div className="text-sm text-Dark-Grayish-Blue font-bold hidden sm:flex gap-4">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button className="text-sm text-Dark-Grayish-Blue">
            Clear Completed
          </button>
        </div>
      </div>
      <div className="w-full h-[60px] shadow-sm shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue text-md text-Dark-Grayish-Blue font-bold flex justify-center mt-6 bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue sm:hidden gap-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="text-center text-[13px] mt-10 text-Dark-Grayish-Blue">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default Home;
