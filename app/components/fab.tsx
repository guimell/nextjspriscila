import Link from "next/link";
import Whatsapp from "./svg";

export default function Fab() {
  return (
    <Link href="https://wa.me/5571981618308?text=Olá%20P2P!">
      <div className="fixed bottom-4 right-4 rounded-full bg-green-600 p-4 shadow-lg transition-all duration-300 ease-in-out hover:animate-bounce hover:bg-green-700">
        <Whatsapp />
      </div>
    </Link>
  );
}
