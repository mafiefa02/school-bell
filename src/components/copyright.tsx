import dayjs from "dayjs";
import { GlobeIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip";
import { GithubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { Button } from "./ui/button";

type Social = { href: string; label: string; icon: React.ReactNode };
const socials: Social[] = [
  {
    href: "https://github.com/mafiefa02/school-bell",
    label: "GitHub repository",
    icon: <GithubIcon />,
  },
  {
    href: "https://afiefabdurrahman.vercel.app",
    label: "Personal website",
    icon: <GlobeIcon />,
  },
  {
    href: "https://linkedin.com/in/mafiefa",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
];

export const Copyright = () => {
  const year = dayjs().get("years");
  return (
    <footer className="flex items-center justify-between gap-8 border-t bg-background px-6 py-2">
      <p className="whitespace-nowrap text-xs">
        <strong>&copy; {year}</strong> Afief Abdurrahman
      </p>
      <div className="flex items-center gap-1">
        <TooltipProvider>
          {socials.map((social) => (
            <Tooltip key={social.href + social.label}>
              <TooltipTrigger>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={social.href}
                  className="hover:cursor-auto"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    {social.icon}
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </footer>
  );
};
