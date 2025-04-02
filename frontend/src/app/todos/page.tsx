"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchTodos } from "@/services/api";
import { Todo } from "@/types";
import { TodoForm } from "@/components/TodoForm";
import { TodoItem } from "@/components/TodoItem";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      console.error("載入待辦事項失敗:", err);
      setError("載入待辦事項失敗，請稍後重試。");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">待辦事項清單</h1>
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 transition-colors font-medium"
          >
            返回首頁
          </Link>
        </div>

        <TodoForm onTodoCreated={loadTodos} />

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            所有待辦事項
          </h2>

          {loading && <p className="text-gray-700">載入中...</p>}

          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4 border border-red-200">
              {error}
            </div>
          )}

          {!loading && !error && todos.length === 0 && (
            <p className="text-gray-700">目前沒有待辦事項，請新增一項。</p>
          )}

          <div className="mt-4 space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onUpdate={loadTodos} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
