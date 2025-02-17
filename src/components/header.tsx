import { Link, useLocation } from "@tanstack/react-router";
import { CalendarIcon, CircleHelp, HomeIcon } from "lucide-react";
import { Button } from "./ui/button";

type Menu = { href: string; label: string; icon: React.ReactNode };
const menus: Menu[] = [
  { label: "home", href: "/", icon: <HomeIcon size={16} /> },
  { label: "about", href: "/about", icon: <CircleHelp size={16} /> },
  { label: "schedule", href: "/schedule", icon: <CalendarIcon size={16} /> },
];

export const Header = () => {
  const { pathname } = useLocation();
  const isActive = (href: string) => pathname === href;
  return (
    <header className="flex items-center justify-between gap-8 border-b bg-background px-6 py-2">
      <Link to="/">
        <strong>ringbell</strong>
      </Link>
      <div className="flex items-center gap-2">
        {menus.map((menu) => (
          <Button
            key={menu.href}
            className="flex items-center gap-2"
            variant={isActive(menu.href) ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to={menu.href}>
              {menu.icon} <span>{menu.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </header>
  );
};
