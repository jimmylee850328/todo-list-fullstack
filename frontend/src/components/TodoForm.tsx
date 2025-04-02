"use client";

import { useState } from "react";
import { createTodo } from "@/services/api";

interface TodoFormProps {
  onTodoCreated: () => void;
}

export const TodoForm = ({ onTodoCreated }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    setIsSubmitting(true);

    try {
      await createTodo({
        title,
        description: description || null,
        completed: false,
      });

      setTitle("");
      setDescription("");
      onTodoCreated();
    } catch (error) {
      console.error("創建待辦事項失敗:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">新增待辦事項</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          標題 *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-50"
          placeholder="輸入待辦事項標題"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          描述 (選填)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-50"
          placeholder="輸入詳細描述"
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !title.trim()}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        {isSubmitting ? "處理中..." : "新增待辦事項"}
      </button>
    </form>
  );
};
