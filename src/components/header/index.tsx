"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      href: "/", // Home'ın href'i "/"
      subitems: ["Characters", "Filters"], // Home altındaki alt öğeler
    },
    {
      name: "About",
      href: "/about", // About altına alt öğe eklenmemiş
      subitems: [], // Boş dizi çünkü alt öğe olmayacak
    },
  ];

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                INTERVİEW FOR NEXT.JS
              </span>
            </Link>
            <nav className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.subitems.length > 0 ? ( // Eğer alt öğe varsa DropdownMenu göster
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary">
                          {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.subitems.map((subitem) => (
                            <DropdownMenuItem key={subitem}>
                              {/* URL'nin tam adresini belirtiyoruz */}
                              <Link
                                href={
                                  subitem === "Characters"
                                    ? "/char"
                                    : subitem === "Filters"
                                    ? "/filters"
                                    : ""
                                }
                                className="w-full"
                              >
                                {subitem}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center text-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
