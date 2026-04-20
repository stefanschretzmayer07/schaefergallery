import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="Schaefer's Gallery Barbershop"
              width={96}
              height={96}
              className="h-20 w-20 rounded-full bg-primary-foreground/95 object-contain p-2"
            />
            <p className="mt-4 text-sm text-primary-foreground/70">
              Refined cuts. Calm atmosphere. Miller Place, NY.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Visit
            </h4>
            <p className="text-primary-foreground/80">984 NY-25A</p>
            <p className="text-primary-foreground/80">Miller Place, NY</p>
            <a
              href="tel:6314521992"
              className="mt-2 inline-block text-primary-foreground/80 hover:text-accent"
            >
              (631) 452-1992
            </a>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hours
            </h4>
            <p className="text-primary-foreground/80">Mon · Appointment</p>
            <p className="text-primary-foreground/80">Tue – Wed · Walk-in</p>
            <p className="text-primary-foreground/80">Thu – Sat · Appointment</p>
            <p className="text-primary-foreground/80">Sun · Closed</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Schaefer's Gallery Barbershop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/book" className="hover:text-accent">
              Book
            </Link>
            <Link to="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
