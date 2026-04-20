import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight md:text-2xl">
            Schaefer's Gallery
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Barbershop
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="nav-underline text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="rounded-full bg-primary px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
