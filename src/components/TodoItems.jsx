import React from 'react';
import not_tick from '../assets/not_tick.png';
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';

export default function TodoItems({
  text,
  id,
  isComplete,
  deleteTodo,
  toggle,
  isFirst,
  isLast,
  moveUp,
  moveDown,
}) {
  return (
    <div className="flex items-center my-3 gap-2 border-b">
      <div className=" flex-col gap-1">
        <button
          onClick={() => moveUp(id)}
          disabled={isFirst}
          className="text-xl text-gray-500 inline-block"
        >
          🔼
        </button>
        <button
          onClick={() => moveDown(id)}
          disabled={isLast}
          className="text-xl text-gray-500"
        >
          🔽
        </button>
      </div>
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7 " />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? 'line-through' : ''
          }`}
        >
          {text}
        </p>
      </div>

      <img
        src={delete_icon}
        alt=""
        className="w-3.5"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
}
