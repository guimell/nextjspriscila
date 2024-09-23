import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row gap-6 items-end justify-end">
        <Link href={""}>Home</Link>
        <Link href={""}>Serviços</Link>
        <Link href={""}>Blog</Link>
        <Link href={""}>Contato</Link>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* sessão carrossel */}
        <div>
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </div>

        {/* sessão quem somos */}
        <div className="flex flex-col gap-6">
          <p className="text-center">Quem somos</p>
          <p>
            A P2P é uma empresa de consultoria em gestão de saúde ocupacional e
            segurança do trabalho, feita por pessoas para pessoas. Surgimos para
            trazer soluções de medicina, ergonomia e segurança do trabalho para
            micro e pequenas empresas, auxiliando-as no cumprimento da
            legislação vigente e agregando valor ao cuidado com os
            colaboradores, através de uma visão integral da saúde. Acreditamos
            que a saúde e segurança do trabalho, quando bem feitas, não são um
            custo para as empresas, mas sim um investimento, através da redução
            das tributações e das ausências do trabalhador por motivo de saúde,
            melhora da produtividade dos colaboradores.
          </p>

          <div className="flex flex-col md:flex-row gap-6 ">
            <div className="flex flex-col bg-yellow-700 w-full p-2  rounded-sm items-center justify-center gap-3">
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              <p>Nossa Missão</p>
              <p>
                {" "}
                Apoiar os empresários a tornarem suas empresas mais produtivas e
                eficientes através da saúde e segurança dos trabalhadores.
              </p>
            </div>
            <div className="flex flex-col bg-yellow-700 w-full p-2  rounded-sm items-center justify-center gap-3">
              {" "}
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              <p> Nossa Visão</p>
              <p>
                Ser reconhecida nacionalmente pela qualidade do serviços e
                atendimento aos clientes.
              </p>
            </div>
            <div className="flex flex-col bg-yellow-700 w-full p-2  rounded-sm items-center justify-center gap-3">
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />{" "}
              <p>Nossos Valores</p>
              <p>
                ◦ A vida em 1 lugar ◦ Ética é inegociável ◦ Eficiência nos
                processos ◦ Qualidade dos serviços ◦ Inovação ◦ Foco no cliente
              </p>
            </div>
          </div>
        </div>
        {/* sessão da equipe */}
        <div className="flex flex-col w-full p-2 gap-6 bg-yellow-700  items-center justify-center ">
          <p>Nossa Equipe</p>

          {/* Dra.Priscila */}
          <div className="flex flex-col sm:flex-row w-full p-2 gap-2 items-center justify-center bg-green-900 ">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />

            <div className="flex flex-col gap-2">
              <p className="text-center">Dra.Priscila Merces</p>
              <p>
                Médica do trabalho, membro da Associação de medicina do
                trabalho, especialista em Perícias médicas pela Fundação Unimed
                e MBA em Gestão empresarial pela FGV. Com mais de 12 anos de
                experiencia na área de saúde ocupacional, de empresas nas áreas
                de Indústria Química e Petroquímica, Construção civil, Bancário,
                Portuária, Mineração, Varejo e atacado. Atuou em grandes
                empresas, como: Braskem, Banco do Brasil, Grupo Unigel, Walmart,
                Grupo Big, Grupo Carrefour, entre outras. Além de atuação como
                perita judicial.
              </p>
            </div>
          </div>

          {/* Eng.Rosana */}
          <div className="flex flex-col sm:flex-row w-full p-2 gap-2 items-center justify-center bg-green-900 ">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            <div className="flex flex-col gap-2">
              <p className="text-center">Eng. Rosana Luz</p>
              <p>
                Engenheira de Produção, especialista em segurança do trabalho e
                formação em higiene ocupacional. Com mais de 12 anos de
                experiencia nas áreas de Indústria Química e Petroquímica,
                Construção civil, Indústria de alimentos., Hospitalar, saúde
                ocupacional, entre outras. Além de atuação como Professor
                docente no Senai.
              </p>
            </div>
          </div>
        </div>

        <div> </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
    </div>
  );
}
