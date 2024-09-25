import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex-wrap row-start-3 flex gap-6 p-6  items-center justify-center ">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/p2psaudeeseg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
        Instagram
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.facebook.com/p2psaudeeseg?_rdc=1&_rdr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
        Facebook
      </a>
    </footer>
  );
}
