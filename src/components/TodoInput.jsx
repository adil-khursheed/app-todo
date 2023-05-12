import React from "react";

const TodoInput = ({ addTaskHandler, title, setTitle }) => {
  return (
    <form
      onSubmit={addTaskHandler}
      className=" w-full h-[60px] flex items-center gap-7 bg-Very-Light-Gray dark:bg-Very-Dark-Grayish-Blue px-4 rounded-[4px] mb-6">
      <div className="w-7 h-auto">
        <div className="w-6 h-6 border border-Very-Light-Grayish-Blue rounded-full"></div>
      </div>
      <input
        type="text"
        autoFocus
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-full rounded-[4px] bg-transparent border-none outline-none text-lg text-Very-Dark-Desaturated-Blue dark:text-Very-Light-Grayish-Blue"
      />
    </form>
  );
};

export default TodoInput;
