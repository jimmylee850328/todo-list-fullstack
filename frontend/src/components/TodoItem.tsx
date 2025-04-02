"use client";

import { Todo } from "@/types";
import { updateTodo, deleteTodo } from "@/services/api";

interface TodoItemProps {
  todo: Todo;
  onUpdate: () => void;
}

export const TodoItem = ({ todo, onUpdate }: TodoItemProps) => {
  const handleToggleComplete = async () => {
    try {
      await updateTodo(todo.id, { completed: !todo.completed });
      onUpdate();
    } catch (error) {
      console.error("更新狀態失敗:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error("刪除失敗:", error);
    }
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            aria-label={`將 ${todo.title} 標記為${
              todo.completed ? "未完成" : "已完成"
            }`}
          />
          <div>
            <h3
              className={`text-lg font-medium ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p
                className={`text-sm ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {todo.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 p-2 rounded-full transition-colors"
          aria-label={`刪除 ${todo.title}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
