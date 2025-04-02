import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-5xl w-full text-center bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          待辦事項清單應用
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          使用 Next.js 和 Django 構建的全棧應用
        </p>
        <Link
          href="/todos"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          進入待辦事項
        </Link>
      </div>
    </main>
  );
}
