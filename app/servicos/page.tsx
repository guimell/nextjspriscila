import Image from "next/image";
import imagemServiço from "@/public/homePage/imagemServiço.png";
import { textServices } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Serviços() {
  return (
    <>
      <div className="relative mx-auto aspect-[10/3] w-full max-w-7xl">
        <Image src={imagemServiço} alt="File icon" fill={true} />
      </div>
      <main className="flex flex-col gap-8">
        <div className="flex w-full flex-col gap-6 p-6">
          {/* Card com todos os títulos dos serviços em grid, clicáveis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 place-items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
                {textServices.map((service, index) => (
                  <a
                    key={`title-${index}`}
                    href={`#section-${index}`}
                    className="flex hover:text-secondary hover:underline dark:hover:text-accent"
                  >
                    <span className="mr-2">•</span>
                    {service.title}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seções separadas com os conteúdos de cada serviço */}
          {textServices.map((service, index) => (
            <div
              key={`section-${index}`}
              id={`section-${index}`}
              className="scroll-mt-24"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.child}</CardContent>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
