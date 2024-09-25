import Link from "next/link";
import Whatsapp from "./svg";

export default function Fab() {
  return (
    <Link href="https://wa.me/5571981618308?text=Olá%20P2P!">
      <div className="fixed bottom-4 right-4 bg-green-600 p-4 rounded-full shadow-lg ">
        <Whatsapp />
      </div>
    </Link>
  );
}
