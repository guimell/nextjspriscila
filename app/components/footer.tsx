import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-6 p-6">
      <a
        className="flex items-center gap-2 hover:text-accent hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/p2psaudeeseg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram />
        Instagram
      </a>
      <a
        className="flex items-center gap-2 hover:text-accent hover:underline hover:underline-offset-4"
        href="https://www.facebook.com/p2psaudeeseg?_rdc=1&_rdr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiFacebook />
        Facebook
      </a>
    </footer>
  );
}
