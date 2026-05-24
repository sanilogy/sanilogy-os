import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";
import icon from "@/assets/sanilogy-icon.png";
import { PITCH_DECK_URL } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/why-invest", label: "Why Invest" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isActive = (path: (typeof links)[number]["to"]) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sanilogy" className="hidden h-9 w-auto md:block" />
          <img src={icon} alt="Sanilogy" className="h-9 w-auto md:hidden" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative py-2 text-base font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-accent after:transition-transform ${
                isActive(l.to)
                  ? "text-primary after:scale-x-100"
                  : "text-muted-foreground after:scale-x-0 hover:text-primary hover:after:scale-x-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PITCH_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            View Pitch Deck
          </a>
        </div>
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="flex flex-col gap-3 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`border-l-2 py-1.5 pl-3 text-base font-semibold transition-colors ${
                  isActive(l.to)
                    ? "border-accent text-primary"
                    : "border-transparent text-foreground hover:border-accent hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2.5 rounded-md bg-accent text-center text-accent-foreground font-semibold mt-2"
            >
              View Pitch Deck
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
