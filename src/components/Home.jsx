import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../redux/actions/userAction";
import { toast } from "react-hot-toast";

const Home = () => {
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
        <div className="relative flex justify-between items-center px-4 h-[45px]">
          <p className="text-sm text-Dark-Grayish-Blue">
            {user.tasks.length} items left
          </p>
          <div className="absolute sm:relative w-full sm:w-0 -bottom-20 sm:bottom-0 rounded-[4px] left-0 text-sm text-Dark-Grayish-Blue font-bold flex justify-center gap-4 bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue sm:bg-transparent sm:dark:bg-transparent h-[60px] shadow-sm sm:shadow-none shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue text-md">
            <button className="active">All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button className="text-sm text-Dark-Grayish-Blue">
            Clear Completed
          </button>
        </div>
      </div>
      <div className="text-center text-[13px] mt-32 sm:mt-10 text-Dark-Grayish-Blue">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default Home;
