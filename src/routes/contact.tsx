import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schaefer's Gallery Barbershop" },
      {
        name: "description",
        content: "Visit Schaefer's Gallery at 984 NY-25A, Miller Place, NY. Call (631) 452-1992.",
      },
      { property: "og:title", content: "Contact — Schaefer's Gallery Barbershop" },
      {
        property: "og:description",
        content: "Find us at 984 NY-25A, Miller Place, NY.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();

  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-36 md:pt-44">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Visit
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">
            Stop by, or give us a call.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: ["984 NY-25A", "Miller Place, NY"],
              href: "https://maps.google.com/?q=984+NY-25A+Miller+Place+NY",
              cta: "Get directions",
            },
            {
              icon: Phone,
              title: "Phone",
              lines: ["(631) 452-1992"],
              href: "tel:6314521992",
              cta: "Call now",
            },
            {
              icon: Clock,
              title: "Hours",
              lines: ["Mon – Fri · 9am – 7pm", "Saturday · 9am – 6pm", "Sunday · Closed"],
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="reveal rounded-2xl border border-border bg-background p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <card.icon className="size-5 text-accent" />
              <h3 className="mt-6 font-serif text-2xl">{card.title}</h3>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                {card.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              {card.href && (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-foreground"
                >
                  {card.cta} →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Map to Schaefer's Gallery Barbershop"
            src="https://www.google.com/maps?q=984+NY-25A+Miller+Place+NY&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="reveal mt-16 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
