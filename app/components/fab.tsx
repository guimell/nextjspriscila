import Link from "next/link";

export default function Fab() {
  return (
    <Link href={"/"}>
      <div className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        +
      </div>
    </Link>
  );
}
