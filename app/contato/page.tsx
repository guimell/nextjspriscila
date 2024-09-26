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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    sendEmail({
      name: values.nome,
      email: values.email,
      subject: `Contato de ${values.empresa}`,
      message: `Nome: ${values.nome}
Email: ${values.email}
Telefone: ${values.telefone}
Empresa: ${values.empresa}
CNPJ: ${values.cnpj}
Funcionários: ${values.funcionarios}
Mensagem: ${values.mensagem}`,
    });
  }

  interface EmailParams {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const sendEmail = async ({
    name,
    email,
    subject,
    message,
  }: EmailParams): Promise<boolean> => {
    const serviceID = "service_5io0bdq";
    const templateID = "template_ksmrhks";
    const userID = "7HSzBI9HYk-Fk7Ye3";

    const url = "https://api.emailjs.com/api/v1.0/email/send";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        origin: "http://localhost",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: {
          user_name: name,
          user_email: email,
          user_subject: subject,
          user_message: message,
        },
      }),
    });

    return response.ok; // returns true if response status is 200-299, else false
  };

  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Card className="flex w-full flex-col items-center">
        <CardHeader>
          <CardTitle>Informações de contato</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p>+55 71-98161-8308</p>
          <p>comercial@p2psaudeeseguranca.com.br</p>
          <p>siga nossas redes sociais</p>
          <div className="flex flex-row gap-6">
            <Link
              href="https://www.instagram.com/p2psaudeeseg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </Link>
            <Link
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
                      <Input type="number" {...field} />
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
