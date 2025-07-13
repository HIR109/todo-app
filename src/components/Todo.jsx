import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';
import { v4 as uuid } from 'uuid';

export default function Todo() {
  const [todos, setTodos] = useState(
    localStorage.getItem('todosMemory')
      ? JSON.parse(localStorage.getItem('todosMemory'))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;

    const newTodo = {
      id: uuid(),
      text: inputText,
      isComplete: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const toggle = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todosMemory', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">タスク管理アプリ</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="やることを書いてね"
          ref={inputRef}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD+
        </button>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <TodoItems
              key={todo.id}
              text={todo.text}
              id={todo.id}
              isComplete={todo.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}
