"use client";
import Image from "next/image";
import brand from "@/public/homePage/p2pLogoEscrita.jpg";
import vamosProteger from "@/public/homePage/vamosProteger.png";
import carretelConfuso from "@/public/homePage/carretelConfuso.png";
import servico3 from "@/public/homePage/servico3.jpeg";
import pity from "@/public/homePage/pity.jpg";
import engenheira from "@/public/homePage/engenheiraSeg.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Eye, Star } from "lucide-react";

export default function Home() {
  const images = [vamosProteger, carretelConfuso, servico3];

  return (
    <main className="flex flex-col gap-8  items-center ">
      <div className="w-full  relative aspect-[10/3] ">
        <Image src={brand} alt="File icon" fill={true} />
      </div>

      {/* SESSÃO CARROSSEL*/}
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {images.map(function (image, index) {
            return (
              <CarouselItem key={`image-${image}-${index}`}>
                <div className="w-full  relative aspect-[10/3]">
                  <Image
                    className="object-cover"
                    src={image}
                    alt={"image"}
                    fill={true}
                  ></Image>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-2" />
        <CarouselNext className="-right-2" />
      </Carousel>

      {/* SESSÃO QUE SOMOS */}
      <div className="flex flex-col gap-6">
        <h2 className="text-center">Quem somos</h2>
        <p>
          A P2P é uma empresa de consultoria em gestão de saúde ocupacional e
          segurança do trabalho, feita por pessoas para pessoas. Surgimos para
          trazer soluções de medicina, ergonomia e segurança do trabalho para
          micro e pequenas empresas, auxiliando-as no cumprimento da legislação
          vigente e agregando valor ao cuidado com os colaboradores, através de
          uma visão integral da saúde. Acreditamos que a saúde e segurança do
          trabalho, quando bem feitas, não são um custo para as empresas, mas
          sim um investimento, através da redução das tributações e das
          ausências do trabalhador por motivo de saúde, melhora da produtividade
          dos colaboradores.
        </p>

        <div className="flex flex-col md:flex-row gap-6 ">
          {data.map(function (item, index) {
            return (
              <Card
                key={`card-${index}`}
                className="flex flex-col w-auto md:w-1/3 items-center justify-center"
              >
                <CardHeader className="flex flex-col  items-center justify-center">
                  {item.icon}
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* sessão da equipe */}

      <h2>Nossa Equipe</h2>

      {/* Dra.Priscila */}
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-2">
          <Image
            className="m-2"
            aria-hidden
            src={pity}
            alt="File icon"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <p className="text-center">Dra.Priscila Merces</p>
            <p>
              Médica do trabalho, membro da Associação de medicina do trabalho,
              especialista em Perícias médicas pela Fundação Unimed e MBA em
              Gestão empresarial pela FGV. Com mais de 12 anos de experiencia na
              área de saúde ocupacional, de empresas nas áreas de Indústria
              Química e Petroquímica, Construção civil, Bancário, Portuária,
              Mineração, Varejo e atacado. Atuou em grandes empresas, como:
              Braskem, Banco do Brasil, Grupo Unigel, Walmart, Grupo Big, Grupo
              Carrefour, entre outras. Além de atuação como perita judicial.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Eng.Rosana */}
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-2">
          <Image
            className="m-2"
            aria-hidden
            src={engenheira}
            alt="File icon"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <p className="text-center">Eng. Rosana Luz</p>
            <p>
              Engenheira de Produção, especialista em segurança do trabalho e
              formação em higiene ocupacional. Com mais de 12 anos de
              experiencia nas áreas de Indústria Química e Petroquímica,
              Construção civil, Indústria de alimentos., Hospitalar, saúde
              ocupacional, entre outras. Além de atuação como Professor docente
              no Senai.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
const data = [
  {
    icon: <Flag className="w-10 h-10" />,
    title: "Nossa Missão",
    description:
      "Apoiar os empresários a tornarem suas empresas mais produtivas e eficientes através da saúde e segurança dos trabalhadores.",
  },
  {
    icon: <Eye className="w-10 h-10" />,
    title: "nossa visão",
    description:
      "Ser reconhecida nacionalmente pela qualidade do serviços e atendimento aos clientes.",
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: "nossos valores",
    description: (
      <ul>
        <li>• A vida em 1 lugar</li>
        <li>• Ética é inegociável</li>
        <li>• Eficiência nos processos</li>
        <li>• Qualidade dos serviços</li>
        <li>• Inovação</li>
        <li>• Foco no cliente</li>
      </ul>
    ),
  },
];
