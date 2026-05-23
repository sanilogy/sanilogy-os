import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";
import icon from "@/assets/sanilogy-icon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Solutions" },
  { to: "/technology", label: "Technology" },
  { to: "/why-invest", label: "Why Invest" },
  { to: "/investors", label: "Investor Relations" },
  { to: "/franchise", label: "Impact" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-border shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sanilogy" className="hidden md:block h-8 w-auto" />
          <img src={icon} alt="Sanilogy" className="md:hidden h-8 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/sanilogy-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
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
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground py-1"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/sanilogy-pitch-deck.pdf"
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
