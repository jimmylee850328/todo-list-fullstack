import { Todo } from "@/types";

// 在瀏覽器中，始終使用 localhost
// 在 SSR 期間，使用環境變數中的值（可能是 Docker 網絡名稱）
const isBrowser = typeof window !== "undefined";
const API_URL = isBrowser
  ? "http://localhost:8000/api"
  : process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_URL}/todos/`);
  if (!response.ok) {
    throw new Error("網路錯誤");
  }
  return response.json();
};

export const fetchTodo = async (id: number): Promise<Todo> => {
  const response = await fetch(`${API_URL}/todos/${id}/`);
  if (!response.ok) {
    throw new Error("網路錯誤");
  }
  return response.json();
};

export const createTodo = async (
  todo: Omit<Todo, "id" | "created_at" | "updated_at">
): Promise<Todo> => {
  const response = await fetch(`${API_URL}/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("創建失敗");
  }
  return response.json();
};

export const updateTodo = async (
  id: number,
  todo: Partial<Omit<Todo, "id" | "created_at" | "updated_at">>
): Promise<Todo> => {
  const response = await fetch(`${API_URL}/todos/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("更新失敗");
  }
  return response.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/todos/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("刪除失敗");
  }
};
