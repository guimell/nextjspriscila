import Image from "next/image";
import imagemServiço from "@/public/homePage/imagemServiço.png";
import { textServices } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Serviços() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto relative aspect-[10/3] ">
        <Image src={imagemServiço} alt="File icon" fill={true} />
      </div>
      <main className="flex flex-col gap-8 ">
        <div className="flex flex-col w-full gap-6 p-6 ">
          {textServices.map(function (service, index) {
            return (
              <Card key={`service-${service.title}-${index}`}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.child}</CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
