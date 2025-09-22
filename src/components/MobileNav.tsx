// src/components/MobileNav.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] rounded-none">
        <nav className="flex flex-col gap-4 pt-6">
          <Link 
            href="/" 
            className="text-lg font-medium" 
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="text-lg font-medium" 
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/finance" 
            className="text-lg font-medium" 
            onClick={() => setOpen(false)}
          >
            Finance
          </Link>
          <Link 
            href="/blockchain" 
            className="text-lg font-medium" 
            onClick={() => setOpen(false)}
          >
            Blockchain
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium" 
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}