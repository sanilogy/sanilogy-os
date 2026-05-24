import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  MAILTO_URL,
  PITCH_DECK_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Sanilogy" className="mb-5 h-9 w-auto" />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Sanilogy is building AI-powered public sanitation infrastructure for cleaner, smarter,
            and more accountable cities.
          </p>
          <a
            href={PITCH_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            View Investor Pitch Deck
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/solutions" className="text-foreground hover:text-accent">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/why-invest" className="text-foreground hover:text-accent">
                Why Invest
              </Link>
            </li>
            <li>
              <Link to="/impact" className="text-foreground hover:text-accent">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 text-accent" />
              <a href={MAILTO_URL} className="break-all hover:text-accent">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 text-accent" />
              <a href={CONTACT_PHONE_HREF} className="hover:text-accent">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={15} className="mt-0.5 text-accent" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp Now
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-accent" />
              {CONTACT_LOCATION}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row lg:px-10">
          <span>&copy; {new Date().getFullYear()} Sanilogy. All rights reserved.</span>
          <span>AI-powered public sanitation infrastructure.</span>
        </div>
      </div>
    </footer>
  );
}
