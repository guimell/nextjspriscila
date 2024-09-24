import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex-wrap row-start-3 flex gap-6 p-6  items-center justify-center">
      <Image
        aria-hidden
        src="https://nextjs.org/icons/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/p2psaudeeseg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Instagram
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.facebook.com/p2psaudeeseg?_rdc=1&_rdr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Facebook
      </a>
    </footer>
  );
}
