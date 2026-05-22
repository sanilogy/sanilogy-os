import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-md bg-gradient-red glow-red grid place-items-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold text-lg">Sanilogy</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            The operating system for public sanitation infrastructure. AI, IoT and
            automation rebuilding the most overlooked layer of the modern city.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link to="/platform" className="hover:text-primary">AI Platform</Link></li>
            <li><Link to="/franchise" className="hover:text-primary">Franchise</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/investors" className="hover:text-primary">Investors</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} Sanilogy. All rights reserved.</span>
          <span>Reinventing public sanitation through AI.</span>
        </div>
      </div>
    </footer>
  );
}
