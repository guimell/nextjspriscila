import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/brand/p2pLogo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-background bg-opacity-10 backdrop-blur-md shadow-md sticky top-0 right-0 z-50 ">
      <nav className=" flex flex-row w-full h-16 max-w-7xl mx-auto items-center justify-between p-2 ">
        <Image src={logo} alt={""} width={80} height={80}></Image>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="flex md:hidden">
            <Menu className="text-foreground" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center">
            {routes.map(function (link, index) {
              return (
                <Link
                  key={`navLink--${index}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {routes.map(function (link, index) {
              return (
                <NavigationMenuItem key={`navLink--${index}`}>
                  <Link legacyBehavior passHref href={link.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}

const routes: { href: string; name: string }[] = [
  { name: "Home", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];
