import Link from "next/link";

export default function Contato() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col w-full items-center justify-around bg-yellow-700 ">
            <h1>Informações de contato</h1>
            <p>+55 71-98161-8308</p>
            <p>comercial@p2psaudeeseguranca.com.br</p>
            <p>siga nossas redes sociais</p>
            <div className="flex flex-row gap-6">
              <Link href={""}>instagram</Link>
              <Link href={""}>facebook</Link>
            </div>
          </div>
          <div className="flex flex-col w-full bg-yellow-700">
            <h1>contato</h1>
            <form action="">
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
              <textarea name="" id="">
                Nome
              </textarea>
            </form>
            <button>Enviar</button>
          </div>
        </div>
      </main>
    </div>
  );
}
