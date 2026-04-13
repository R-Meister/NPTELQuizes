"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Home, Layers } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/course", label: "Courses", icon: Layers },
];

const QuickAccessToolbar = () => {
  const pathname = usePathname();

  const resolvedItems = useMemo(() => {
    return navItems.map((item) => ({
      ...item,
      active:
        item.href === "/"
          ? pathname === "/"
          : pathname === item.href || pathname.startsWith(`${item.href}/`),
    }));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="text-sm md:text-base font-semibold text-slate-100 tracking-wide">
          NPTEL Prep
        </Link>

        <nav className="flex items-center gap-1 md:gap-2 overflow-x-auto">
          {resolvedItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs md:text-sm whitespace-nowrap transition-colors ${
                  item.active
                    ? "bg-emerald-500 text-black font-semibold"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default QuickAccessToolbar;
