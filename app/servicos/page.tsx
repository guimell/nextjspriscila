import Image from "next/image";

export default function Serviços() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-6  items-center justify-center ">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <div className="flex flex-col w-full gap-6 p-6 ">
            <div className="bg-yellow-700">
              <p className="text-center">Title</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                maxime est vitae expedita delectus. Ut, natus vero ab, quidem
                voluptas dicta dolore fugit atque cum deserunt est hic modi
                molestias.
              </p>
            </div>
            <div className="bg-yellow-700">
              <p className="text-center">Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                praesentium autem vero porro, distinctio obcaecati tenetur quasi
                mollitia consequuntur reiciendis possimus odit nisi explicabo
                incidunt ipsam. Dolores nobis optio ab?
              </p>
            </div>
            <div className="bg-yellow-700">
              <p className="text-center">Title</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam impedit nihil illum error dolore possimus odit ex
                obcaecati iusto corporis a, eveniet voluptatem expedita
                repudiandae, cum, aliquid nesciunt porro voluptate?
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
