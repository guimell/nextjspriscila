"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "E-mail inválido.",
  }),
  telefone: z.string().min(10, {
    message: "Número de telefone inválido.",
  }),
  empresa: z.string().min(2, {
    message: "Nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  cnpj: z.string().length(14, {
    message: "CNPJ deve ter 14 dígitos.",
  }),
  funcionarios: z.string().min(1, {
    message: "Informe a quantidade de funcionários.",
  }),
  mensagem: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

export default function Contato() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      cnpj: "",
      funcionarios: "",
      mensagem: "",
    },
  });

  const sendEmail = async (formData: z.infer<typeof formSchema>) => {
    const serviceID = "service_023mihm";
    const templateID = "template_yfok8kk";
    const userID = "4rFkLGthCDrgOz6fV";

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          user_name: formData.nome,
          user_email: formData.email,
          user_telefone: formData.telefone,
          user_empresa: formData.empresa,
          user_cnpj: formData.cnpj,
          user_funcionarios: formData.funcionarios,
          user_message: formData.mensagem,
        },
        userID,
      );
      if (result.status === 200) {
        alert("Mensagem enviada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendEmail(values);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Card className="flex w-full flex-col items-center">
        <CardHeader>
          <CardTitle>Informações de contato</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <a
            href="tel:+5571981618308"
            className="hover:text-secondary hover:underline dark:hover:text-accent"
          >
            +55 71-98161-8308
          </a>
          <a
            href="mailto:comercial@p2psaudeeseguranca.com.br"
            className="hover:text-secondary hover:underline dark:hover:text-accent"
          >
            comercial@p2psaudeeseguranca.com.br
          </a>
          <p>siga nossas redes sociais</p>
          <div className="flex flex-row gap-6">
            <Link
              className="hover:text-secondary dark:hover:text-accent"
              href="https://www.instagram.com/p2psaudeeseg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-accent"
              href="https://www.facebook.com/p2psaudeeseg?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook />
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Sua empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CNPJ</FormLabel>
                    <FormControl>
                      <Input placeholder="00.000.000/0000-00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="funcionarios"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade de funcionários</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0"
                        {...field}
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Sua mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Enviar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
