import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deletecompletedTask,
  loadUser,
} from "../redux/actions/userAction";
import { toast } from "react-hot-toast";
import { DragDropContext } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../helpers/StrictModeDroppable";

const Home = ({ tabs }) => {
  const [title, setTitle] = useState("");

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const { error, message } = useSelector((state) => state.message);

  const { user } = useSelector((state) => state.user);

  const [tasks, setTasks] = useState(user.tasks);

  const dispatch = useDispatch();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab).content;

  const addTaskHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTask(title));
    dispatch(loadUser());
  };

  const clearCompletedHandler = async () => {
    await dispatch(deletecompletedTask());
    dispatch(loadUser());
  };

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedTasks = [...tasks];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedTask] = reorderedTasks.splice(sourceIndex, 1);

      reorderedTasks.splice(destinationIndex, 0, removedTask);

      setTasks(reorderedTasks);
    }
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
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {activeTabContent}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="relative flex justify-between items-center px-4 h-[45px]">
          <p className="text-sm text-Dark-Grayish-Blue">
            {user.activeTasks.length} items left
          </p>
          <div className="absolute sm:relative w-full sm:w-0 -bottom-20 sm:bottom-0 rounded-[4px] left-0 text-sm text-Dark-Grayish-Blue font-bold flex justify-center gap-4 bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue sm:bg-transparent sm:dark:bg-transparent h-[60px] shadow-sm sm:shadow-none shadow-Light-Grayish-Blue dark:shadow-Very-Dark-Desaturated-Blue text-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => handleTabClick(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={clearCompletedHandler}
            className="text-sm text-Dark-Grayish-Blue hover:font-semibold">
            Clear Completed
          </button>
        </div>
      </div>
      <div className="text-center text-[13px] my-32 sm:my-10 text-Dark-Grayish-Blue">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default Home;
