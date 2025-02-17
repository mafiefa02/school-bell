import { Link } from "@tanstack/react-router";
import { CircleHelp } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 border-b bg-background px-6 py-2">
      <Link to="/">
        <strong>ringbell</strong>
      </Link>
      <div className="flex items-center gap-2">
        <Button
          className="flex items-center gap-2"
          variant="ghost"
        >
          <CircleHelp size={16} />
          <span>about</span>
        </Button>
      </div>
    </header>
  );
};
