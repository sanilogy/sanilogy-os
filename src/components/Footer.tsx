import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Sanilogy" className="h-9 w-auto mb-5" />
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Sanilogy is building AI-powered public sanitation infrastructure for
            cleaner, smarter, and more accountable cities.
          </p>
          <a
            href="/sanilogy-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 text-sm px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
          >
            View Investor Pitch Deck
          </a>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/technology" className="text-foreground hover:text-accent">Solutions</Link></li>
            <li><Link to="/platform" className="text-foreground hover:text-accent">AI + IoT Platform</Link></li>
            <li><Link to="/investors" className="text-foreground hover:text-accent">Investor Relations</Link></li>
            <li><Link to="/franchise" className="text-foreground hover:text-accent">Impact</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-2"><Mail size={15} className="text-accent mt-0.5"/> <a href="mailto:yashwant.sanilogy@gmail.com" className="hover:text-accent break-all">yashwant.sanilogy@gmail.com</a></li>
            <li className="flex items-start gap-2"><Phone size={15} className="text-accent mt-0.5"/> <a href="tel:+918085952159" className="hover:text-accent">+91 80859 52159</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="text-accent mt-0.5"/> Indore, Madhya Pradesh, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} Sanilogy. All rights reserved.</span>
          <span>AI-powered public sanitation infrastructure.</span>
        </div>
      </div>
    </footer>
  );
}
